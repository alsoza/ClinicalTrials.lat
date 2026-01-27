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

const API_BASE_URL = "https://api.clinicaltrials.lat/estudios";

export async function getStudies(filters: SearchFilters = {}) {
    try {
        const { query, phase, status } = filters;

        // Base query joining studiesRaw and studiesAi
        let conditions = [];

        // Define a Hybrid Ranking System:
        // 1. Exact Substring Match in Title (Highest Score: 50.0)
        // 2. FTS Relevance (Variable Score: 0.0 - 1.0)

        const titleMatchBoost = query ? sql<number>`
            (CASE 
                WHEN COALESCE(${studiesAi.titleEs}, '') ILIKE ('%' || ${query} || '%') THEN 50.0
                WHEN COALESCE(${studiesAi.titleSimpleEs}, '') ILIKE ('%' || ${query} || '%') THEN 50.0
                WHEN COALESCE(${studiesRaw.briefTitle}, '') ILIKE ('%' || ${query} || '%') THEN 40.0
                WHEN COALESCE(${studiesRaw.officialTitle}, '') ILIKE ('%' || ${query} || '%') THEN 40.0
                WHEN COALESCE(${studiesRaw.primaryCondition}, '') ILIKE ('%' || ${query} || '%') THEN 20.0
                WHEN COALESCE(${studiesAi.briefSummaryEs}, '') ILIKE ('%' || ${query} || '%') THEN 5.0
                ELSE 0 
            END)
        ` : sql<number>`0`;

        const ftsRank = query
            ? sql<number>`
                ts_rank(
                    setweight(to_tsvector('simple', COALESCE(${studiesAi.titleEs}, '')), 'A') ||
                    setweight(to_tsvector('simple', COALESCE(${studiesAi.titleSimpleEs}, '')), 'A') ||
                    setweight(to_tsvector('simple', COALESCE(${studiesRaw.briefTitle}, '')), 'B') ||
                    setweight(to_tsvector('simple', COALESCE(${studiesRaw.officialTitle}, '')), 'B') ||
                    setweight(to_tsvector('simple', COALESCE(${studiesRaw.primaryCondition}, '')), 'B') ||
                    setweight(to_tsvector('simple', COALESCE(${studiesAi.briefSummaryEs}, '')), 'C') ||
                    setweight(to_tsvector('simple', COALESCE(${studiesRaw.briefSummary}, '')), 'D'),
                    plainto_tsquery('simple', ${query})
                )
            `
            : sql<number>`0`;

        const totalRank = sql`(${titleMatchBoost} + ${ftsRank})`;

        if (query) {
            console.log(`[getStudies] Hybrid Searching for query: "${query}"`);
            const searchPattern = `%${query}%`;
            conditions.push(
                or(
                    // FTS match
                    sql`(
                        to_tsvector('simple', COALESCE(${studiesAi.titleEs}, '')) ||
                        to_tsvector('simple', COALESCE(${studiesAi.titleSimpleEs}, '')) ||
                        to_tsvector('simple', COALESCE(${studiesRaw.briefTitle}, '')) ||
                        to_tsvector('simple', COALESCE(${studiesRaw.officialTitle}, '')) ||
                        to_tsvector('simple', COALESCE(${studiesRaw.primaryCondition}, '')) ||
                        to_tsvector('simple', COALESCE(${studiesAi.briefSummaryEs}, '')) ||
                        to_tsvector('simple', COALESCE(${studiesRaw.briefSummary}, ''))
                    ) @@ plainto_tsquery('simple', ${query})`,
                    // Plus ILIKE matches to ensure specific IDs are found even if FTS lexing differs
                    ilike(studiesAi.titleEs, searchPattern),
                    ilike(studiesAi.titleSimpleEs, searchPattern),
                    ilike(studiesRaw.briefTitle, searchPattern),
                    ilike(studiesRaw.primaryCondition, searchPattern),
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

        console.log(`[getStudies] Results for "${query}": ${results.length}. Top: ${results[0]?.nct_id} Rank: ${results[0]?.rank}`);

        return results;

    } catch (error) {
        console.error("Error fetching studies from DB:", error);
        return [];
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
                title_es: studiesAi.titleEs,
                title_simple_es: studiesAi.titleSimpleEs,
                brief_summary_es: studiesAi.briefSummaryEs,
                key_eligibility_es: studiesAi.keyEligibilityEs,
            })
            .from(studiesRaw)
            .leftJoin(studiesAi, eq(studiesRaw.nctId, studiesAi.nctId))
            .where(eq(studiesRaw.nctId, id))
            .limit(1);

        if (results.length === 0) return null;
        return results[0];
    } catch (error) {
        console.error("Error fetching study by ID from DB:", error);
        return null;
    }
}
