"use server";

import { db } from "@/lib/db";
import { studiesRaw, studiesAi } from "@/lib/db/schema";
import { eq, or, ilike, and, sql, desc, inArray } from "drizzle-orm";

export interface SearchFilters {
    query?: string;
    phase?: string[];
    status?: string[];
    condition?: string;
}

export async function getStudies(filters: SearchFilters = {}) {
    try {
        const { query, phase, status } = filters;
        let conditions = [];

        // Define a Hybrid Ranking System:
        // 1. Exact Substring Match in Title/ID (Highest Score)
        // 2. FTS Relevance (Fuzzy match)

        const titleMatchBoost = query ? sql<number>`
            (CASE 
                WHEN ${studiesRaw.nctId} ILIKE ${query} THEN 100.0
                WHEN COALESCE(${studiesAi.titleEs}, '') ILIKE ('%' || ${query} || '%') THEN 80.0
                WHEN COALESCE(${studiesAi.titleSimpleEs}, '') ILIKE ('%' || ${query} || '%') THEN 80.0
                WHEN COALESCE(${studiesRaw.briefTitle}, '') ILIKE ('%' || ${query} || '%') THEN 60.0
                WHEN COALESCE(${studiesRaw.officialTitle}, '') ILIKE ('%' || ${query} || '%') THEN 60.0
                WHEN COALESCE(${studiesRaw.primaryCondition}, '') ILIKE ('%' || ${query} || '%') THEN 40.0
                WHEN COALESCE(${studiesAi.briefSummaryEs}, '') ILIKE ('%' || ${query} || '%') THEN 10.0
                ELSE 0.0 
            END)
        ` : sql<number>`0.0`;

        const ftsRank = query
            ? sql<number>`
                COALESCE(ts_rank(
                    setweight(to_tsvector('simple', COALESCE(${studiesAi.titleEs}, '')), 'A') ||
                    setweight(to_tsvector('simple', COALESCE(${studiesAi.titleSimpleEs}, '')), 'A') ||
                    setweight(to_tsvector('simple', COALESCE(${studiesRaw.briefTitle}, '')), 'B') ||
                    setweight(to_tsvector('simple', COALESCE(${studiesRaw.officialTitle}, '')), 'B') ||
                    setweight(to_tsvector('simple', COALESCE(${studiesRaw.primaryCondition}, '')), 'B') ||
                    setweight(to_tsvector('simple', COALESCE(${studiesAi.briefSummaryEs}, '')), 'C') ||
                    setweight(to_tsvector('simple', COALESCE(${studiesRaw.briefSummary}, '')), 'D'),
                    plainto_tsquery('simple', ${query})
                ), 0.0)
            `
            : sql<number>`0.0`;

        const totalRank = sql`(${titleMatchBoost} + ${ftsRank})`;

        if (query) {
            console.log(`[getStudies] v4.4-recovery Searching for: "${query}"`);
            const searchPattern = `%${query}%`;
            conditions.push(
                or(
                    eq(studiesRaw.nctId, query),
                    ilike(studiesRaw.nctId, searchPattern),
                    ilike(studiesRaw.briefTitle, searchPattern),
                    ilike(studiesRaw.officialTitle, searchPattern),
                    ilike(studiesRaw.primaryCondition, searchPattern),
                    ilike(studiesAi.titleEs, searchPattern),
                    ilike(studiesAi.titleSimpleEs, searchPattern),
                    ilike(studiesAi.briefSummaryEs, searchPattern)
                )
            );
        }

        if (phase && phase.length > 0) {
            conditions.push(inArray(studiesRaw.phase, phase));
        }

        if (status && status.length > 0) {
            conditions.push(inArray(studiesRaw.overallStatus, status));
        }

        const results = await db
            .select({
                nct_id: studiesRaw.nctId,
                brief_title: studiesRaw.briefTitle,
                title_es: studiesAi.titleEs,
                title_simple_es: studiesAi.titleSimpleEs,
                brief_summary: studiesRaw.briefSummary,
                brief_summary_es: studiesAi.briefSummaryEs,
                overall_status: studiesRaw.overallStatus,
                phase: studiesRaw.phase,
                phase_es: studiesAi.phaseEs,
                primary_condition: studiesRaw.primaryCondition,
                category: studiesAi.category,
                locations_json: studiesRaw.locationsJson,
                key_eligibility_es: studiesAi.keyEligibilityEs,
                last_update: studiesRaw.lastUpdatePostDate,
                is_featured: sql<boolean>`false`,
                rank: totalRank,
            })
            .from(studiesRaw)
            .leftJoin(studiesAi, eq(studiesRaw.nctId, studiesAi.nctId))
            .where(conditions.length > 0 ? and(...conditions) : undefined)
            .orderBy(
                sql`${totalRank} DESC`,
                sql`${studiesRaw.lastUpdatePostDate} DESC NULLS LAST`
            )
            .limit(50);

        return results;

    } catch (error) {
        console.error("CRITICAL SEARCH ERROR:", error);
        throw error; // Throw so Vercel logs it clearly
    }
}

export async function getStudyById(id: string) {
    try {
        const results = await db
            .select({
                nct_id: studiesRaw.nctId,
                brief_title: studiesRaw.briefTitle,
                official_title: studiesRaw.officialTitle,
                brief_summary: studiesRaw.briefSummary,
                detailed_description: studiesRaw.detailedDescription,
                overall_status: studiesRaw.overallStatus,
                phase: studiesRaw.phase,
                study_type: studiesRaw.studyType,
                eligibility_criteria_raw: studiesRaw.eligibilityCriteriaRaw,
                sex: studiesRaw.sex,
                minimum_age: studiesRaw.minimumAge,
                maximum_age: studiesRaw.maximumAge,
                conditions: studiesRaw.conditions,
                locations_json: studiesRaw.locationsJson,
                lead_sponsor_name: studiesRaw.leadSponsorName,
                title_es: studiesAi.titleEs,
                title_simple_es: studiesAi.titleSimpleEs,
                brief_summary_es: studiesAi.briefSummaryEs,
                key_eligibility_es: studiesAi.keyEligibilityEs,
                structured_eligibility_json: studiesAi.structuredEligibilityJson,
                video_url: sql<string | null>`NULL`,
            })
            .from(studiesRaw)
            .leftJoin(studiesAi, eq(studiesRaw.nctId, studiesAi.nctId))
            .where(eq(studiesRaw.nctId, id))
            .limit(1);

        if (results.length === 0) return null;
        return results[0];
    } catch (error) {
        console.error("Error fetching study by ID from DB:", error);
        return null; // Don't throw here to avoid breaking the whole page if one study fails
    }
}
