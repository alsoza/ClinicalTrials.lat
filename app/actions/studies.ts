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
                    ilike(studiesAi.titleEs, query),
                    ilike(studiesAi.titleSimpleEs, query),
                    ilike(studiesRaw.primaryCondition, query),
                    ilike(studiesAi.category, query)
                )
            );
        }

        if (filters.phase && filters.phase.length > 0) {
            whereConditions.push(
                or(...filters.phase.map(p => ilike(studiesRaw.phase, `%${p}%`)))
            );
        }

        if (filters.status && filters.status.length > 0) {
            whereConditions.push(
                or(...filters.status.map(s => eq(studiesRaw.overallStatus, s)))
            );
        }

        const query = db
            .select({
                nctId: studiesRaw.nctId,
                title: sql<string>`COALESCE(${studiesAi.titleEs}, ${studiesRaw.briefTitle})`,
                condition: sql<string>`COALESCE(${studiesAi.category}, ${studiesRaw.primaryCondition})`,
                locations: studiesRaw.locationsJson,
                status: studiesRaw.overallStatus,
                phases: studiesRaw.phase,
                keyCriteria: studiesAi.keyEligibilityEs,
                isFeatured: studiesCustom.isFeatured,
                isRecruiting: studiesRaw.isRecruiting,
            })
            .from(studiesRaw)
            .leftJoin(studiesAi, eq(studiesRaw.nctId, studiesAi.nctId))
            .leftJoin(studiesCustom, eq(studiesRaw.nctId, studiesCustom.nctId));

        if (whereConditions.length > 0) {
            query.where(and(...whereConditions));
        }

        const results = await query.limit(50);

        return results.map(study => ({
            ...study,
            locations: Array.isArray(study.locations)
                ? (study.locations as any[]).map(l => l.facility || l.location || "Ubicación no especificada")
                : [],
            phases: study.phases ? [study.phases] : [],
            status: study.status as any
        }));

    } catch (error) {
        console.error("Error fetching studies:", error);
        return [];
    }
}
