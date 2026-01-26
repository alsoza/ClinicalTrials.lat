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
                nctId: studiesRaw.nctId,
                title: sql<string>`COALESCE(${studiesAi.titleEs}, ${studiesRaw.briefTitle})`,
                condition: sql<string>`COALESCE(${studiesAi.category}, ${studiesRaw.primaryCondition})`,
                locations: studiesRaw.locationsJson,
                status: studiesRaw.overallStatus,
                phases: sql<string>`COALESCE(${studiesAi.phaseEs}, ${studiesRaw.phase})`,
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

export async function getStudyById(id: string) {
    try {
        const result = await db
            .select({
                nctId: studiesRaw.nctId,
                briefTitle: studiesRaw.briefTitle,
                officialTitle: studiesRaw.officialTitle,
                briefSummary: studiesRaw.briefSummary,
                detailedDescription: studiesRaw.detailedDescription,
                status: studiesRaw.overallStatus,
                phase: studiesRaw.phase,
                studyType: studiesRaw.studyType,
                eligibilityCriteriaRaw: studiesRaw.eligibilityCriteriaRaw,
                inclusionCriteriaRaw: studiesRaw.inclusionCriteriaRaw,
                exclusionCriteriaRaw: studiesRaw.exclusionCriteriaRaw,
                sex: studiesRaw.sex,
                minimumAge: studiesRaw.minimumAge,
                maximumAge: studiesRaw.maximumAge,
                conditions: studiesRaw.conditions,
                leadSponsorName: studiesRaw.leadSponsorName,
                locations: studiesRaw.locationsJson,
                interventions: studiesRaw.interventionsJson,

                // AI Fields
                titleEs: studiesAi.titleEs,
                titleSimpleEs: studiesAi.titleSimpleEs,
                briefSummaryEs: studiesAi.briefSummaryEs,
                keyEligibilityEs: studiesAi.keyEligibilityEs,
                structuredEligibility: studiesAi.structuredEligibilityJson,
                category: studiesAi.category,
                subcategory: studiesAi.subcategory,
                tags: studiesAi.tags,
                phaseEs: studiesAi.phaseEs,
                studyTypeEs: studiesAi.studyTypeEs,
                interventionsEs: studiesAi.interventionsEs,
                primaryOutcomeEs: studiesAi.primaryOutcomeEs,
                genderTarget: studiesAi.genderTarget,

                // Custom Fields
                imageUrl: studiesCustom.imageUrl,
                videoUrl: studiesCustom.videoUrl,
                isFeatured: studiesCustom.isFeatured,
            })
            .from(studiesRaw)
            .leftJoin(studiesAi, eq(studiesRaw.nctId, studiesAi.nctId))
            .leftJoin(studiesCustom, eq(studiesRaw.nctId, studiesCustom.nctId))
            .where(eq(studiesRaw.nctId, id))
            .limit(1);

        if (!result.length) return null;

        const study = result[0];

        // Process criteria text into arrays
        const processCriteria = (text: string | null) => {
            if (!text) return [];
            // Split by newline and remove bullet symbols if they exist
            return text
                .split("\n")
                .map(line => line.trim())
                .filter(line => line.length > 0 && !line.toLowerCase().startsWith("inclusion criteria") && !line.toLowerCase().startsWith("exclusion criteria"))
                .map(line => line.replace(/^[-*•]\s*/, "").trim());
        };

        let inclusion: string[] = [];
        let exclusion: string[] = [];

        // Check if we have structured JSON
        const structured = study.structuredEligibility as any;
        if (structured && Array.isArray(structured.inclusion)) {
            inclusion = structured.inclusion;
            exclusion = structured.exclusion || [];
        } else {
            inclusion = processCriteria(study.inclusionCriteriaRaw);
            exclusion = processCriteria(study.exclusionCriteriaRaw);
        }

        // Process data for the frontend
        return {
            ...study,
            title: study.titleEs || study.briefTitle,
            summary: study.briefSummaryEs || study.briefSummary,
            inclusion,
            exclusion,
            locations: Array.isArray(study.locations)
                ? (study.locations as any[]).map(l => l.facility || l.location || "Ubicación no especificada")
                : [],
        };
    } catch (error) {
        console.error("Error fetching study by ID:", error);
        return null;
    }
}
