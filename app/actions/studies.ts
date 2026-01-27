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

        if (query) {
            console.log(`[getStudies] Searching for query: "${query}"`);
            const searchPattern = `%${query}%`;
            conditions.push(
                or(
                    ilike(studiesAi.titleEs, searchPattern),
                    ilike(studiesAi.titleSimpleEs, searchPattern),
                    ilike(studiesRaw.briefTitle, searchPattern),
                    ilike(studiesRaw.officialTitle, searchPattern),
                    ilike(studiesAi.briefSummaryEs, searchPattern),
                    ilike(studiesRaw.briefSummary, searchPattern),
                    ilike(studiesRaw.primaryCondition, searchPattern)
                )
            );
        }

        if (phase && phase.length > 0) {
            conditions.push(inArray(studiesRaw.phase, phase));
        }

        if (status && status.length > 0) {
            conditions.push(inArray(studiesRaw.overallStatus, status));
        }

        // Calculate relevance rank if query exists
        // Use explicit concatenation to ensure the pattern is correct
        const relevanceRank = query
            ? sql<number>`
                (CASE WHEN COALESCE(${studiesAi.titleEs}, '') ILIKE ('%' || ${query} || '%') THEN 2000 ELSE 0 END) +
                (CASE WHEN COALESCE(${studiesAi.titleSimpleEs}, '') ILIKE ('%' || ${query} || '%') THEN 2000 ELSE 0 END) +
                (CASE WHEN COALESCE(${studiesRaw.briefTitle}, '') ILIKE ('%' || ${query} || '%') THEN 1000 ELSE 0 END) +
                (CASE WHEN COALESCE(${studiesRaw.officialTitle}, '') ILIKE ('%' || ${query} || '%') THEN 1000 ELSE 0 END) +
                (CASE WHEN COALESCE(${studiesRaw.primaryCondition}, '') ILIKE ('%' || ${query} || '%') THEN 500 ELSE 0 END) +
                (CASE WHEN COALESCE(${studiesAi.briefSummaryEs}, '') ILIKE ('%' || ${query} || '%') THEN 100 ELSE 0 END) +
                (CASE WHEN COALESCE(${studiesRaw.briefSummary}, '') ILIKE ('%' || ${query} || '%') THEN 50 ELSE 0 END)
            `
            : sql<number>`0`;

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
                rank: relevanceRank,
            })
            .from(studiesRaw)
            .leftJoin(studiesAi, eq(studiesRaw.nctId, studiesAi.nctId))
            .where(conditions.length > 0 ? and(...conditions) : undefined)
            .orderBy(
                sql`${relevanceRank} DESC`,
                sql`${studiesRaw.lastUpdatePostDate} DESC NULLS LAST`
            )
            .limit(50);

        console.log(`[getStudies] Found ${results.length} results. Query: "${query}"`);
        if (results.length > 0) {
            console.log(`[getStudies] Top 3 results:`);
            results.slice(0, 3).forEach((r, i) => {
                console.log(` ${i + 1}. ${r.nct_id} (Rank: ${r.rank}) - Title: ${r.title_es || r.brief_title}`);
            });
        }

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
