"use server";

import { db } from "@/lib/db";
import { studiesRaw, studiesAi, studiesCustom } from "@/lib/db/schema";
import { eq, or, ilike, and, sql } from "drizzle-orm";

export interface SearchFilters {
    query?: string;
    phase?: string[];
    status?: string[];
    condition?: string;
}

export async function getStudies(filters: SearchFilters = {}) {
    try {
        let whereConditions = [];

        if (filters.query) {
            const query = `%${filters.query}%`;
            whereConditions.push(
                or(
                    ilike(studiesRaw.nctId, query),
                    ilike(studiesRaw.briefTitle, query),
                    ilike(studiesRaw.officialTitle, query),
                    ilike(studiesRaw.primaryCondition, query),
                    ilike(studiesAi.titleEs, query),
                    ilike(studiesAi.titleSimpleEs, query),
                    ilike(studiesAi.briefSummaryEs, query),
                    ilike(studiesAi.category, query),
                    ilike(studiesAi.subcategory, query),
                    ilike(studiesAi.keyEligibilityEs, query),
                    // For tags, since it's jsonb, we might need a different approach if we want to search inside it.
                    // But for now, let's stick to text fields.
                )
            );
        }

        if (filters.phase && filters.phase.length > 0) {
            whereConditions.push(
                or(
                    ...filters.phase.map(p => ilike(studiesRaw.phase, `%${p}%`)),
                    ...filters.phase.map(p => ilike(studiesAi.phaseEs, `%${p}%`))
                )
            );
        }

        if (filters.status && filters.status.length > 0) {
            whereConditions.push(
                or(...filters.status.map(s => eq(studiesRaw.overallStatus, s)))
            );
        }

        const query = db
            .select({
                nct_id: studiesRaw.nctId,
                title_es: studiesAi.titleEs,
                title_simple_es: studiesAi.titleSimpleEs,
                brief_summary_es: studiesAi.briefSummaryEs,
                key_eligibility_es: studiesAi.keyEligibilityEs,
                interventions_es: studiesAi.interventionsEs,
                overall_status: studiesRaw.overallStatus,
                phase_es: studiesAi.phaseEs,
                category: studiesAi.category,
                subcategory: studiesAi.subcategory,
                tags: studiesAi.tags,
                gender_target: studiesAi.genderTarget,
                minimum_age: studiesRaw.minimumAge,
                maximum_age: studiesRaw.maximumAge,
                locations_json: studiesRaw.locationsJson,
                lead_sponsor_name: studiesRaw.leadSponsorName,
                last_update_post_date: studiesRaw.lastUpdatePostDate,
                is_featured: studiesCustom.isFeatured,
                is_recruiting: studiesRaw.isRecruiting,
            })
            .from(studiesRaw)
            .leftJoin(studiesAi, eq(studiesRaw.nctId, studiesAi.nctId))
            .leftJoin(studiesCustom, eq(studiesRaw.nctId, studiesCustom.nctId));

        if (whereConditions.length > 0) {
            query.where(and(...whereConditions));
        }

        const results = await query.limit(50);
        return results;

    } catch (error) {
        console.error("Error fetching studies:", error);
        return [];
    }
}

export async function getStudyById(id: string) {
    try {
        const result = await db
            .select({
                nct_id: studiesRaw.nctId,
                title_es: studiesAi.titleEs,
                title_simple_es: studiesAi.titleSimpleEs,
                brief_summary_es: studiesAi.briefSummaryEs,
                key_eligibility_es: studiesAi.keyEligibilityEs,
                structured_eligibility_json: studiesAi.structuredEligibilityJson,
                interventions_es: studiesAi.interventionsEs,
                overall_status: studiesRaw.overallStatus,
                phase_es: studiesAi.phaseEs,
                category: studiesAi.category,
                subcategory: studiesAi.subcategory,
                tags: studiesAi.tags,
                gender_target: studiesAi.genderTarget,
                minimum_age: studiesRaw.minimumAge,
                maximum_age: studiesRaw.maximumAge,
                locations_json: studiesRaw.locationsJson,
                lead_sponsor_name: studiesRaw.leadSponsorName,
                last_update_post_date: studiesRaw.lastUpdatePostDate,
                is_featured: studiesCustom.isFeatured,
                video_url: studiesCustom.videoUrl,
                image_url: studiesCustom.imageUrl,
            })
            .from(studiesRaw)
            .leftJoin(studiesAi, eq(studiesRaw.nctId, studiesAi.nctId))
            .leftJoin(studiesCustom, eq(studiesRaw.nctId, studiesCustom.nctId))
            .where(eq(studiesRaw.nctId, id))
            .limit(1);

        if (!result.length) return null;
        return result[0];
    } catch (error) {
        console.error("Error fetching study by ID:", error);
        return null;
    }
}
