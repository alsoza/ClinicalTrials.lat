
import { db } from "./lib/db/index";
import { studiesRaw, studiesAi } from "./lib/db/schema";
import { eq, ilike } from "drizzle-orm";

async function run() {
    const id = "NCT07064473";
    console.log(`Inspecting data for ${id}...`);

    const results = await db
        .select({
            id: studiesRaw.nctId,
            eligibility_criteria_raw: studiesRaw.eligibilityCriteriaRaw,
            inclusion_criteria_raw: studiesRaw.inclusionCriteriaRaw,
            exclusion_criteria_raw: studiesRaw.exclusionCriteriaRaw,
            structured_eligibility_json: studiesAi.structuredEligibilityJson,
        })
        .from(studiesRaw)
        .leftJoin(studiesAi, eq(studiesRaw.nctId, studiesAi.nctId))
        .where(ilike(studiesRaw.nctId, id))
        .limit(1);

    console.log("Full Eligibility Criteria Raw:");
    console.log(results[0]?.eligibility_criteria_raw);
    console.log("\nJSON Response:");
    console.log(JSON.stringify(results, null, 2));
    process.exit(0);
}

run().catch(console.error);
