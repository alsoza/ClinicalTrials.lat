
import { db } from "./lib/db/index";
import { studiesRaw } from "./lib/db/schema";
import { eq, ilike } from "drizzle-orm";

async function run() {
    const id = "NCT07064473";
    const results = await db
        .select({ eligibility_criteria_raw: studiesRaw.eligibilityCriteriaRaw })
        .from(studiesRaw)
        .where(ilike(studiesRaw.nctId, id))
        .limit(1);

    const raw = results[0]?.eligibility_criteria_raw || "";
    console.log("RAW LENGTH:", raw.length);

    // Simple split logic
    const inclusionStart = raw.indexOf("Inclusion Criteria");
    const exclusionStart = raw.indexOf("Exclusion Criteria");

    if (inclusionStart !== -1) {
        const inclusionText = exclusionStart !== -1
            ? raw.substring(inclusionStart, exclusionStart)
            : raw.substring(inclusionStart);
        console.log("--- INCLUSION ---");
        console.log(inclusionText.substring(0, 500));
    }

    if (exclusionStart !== -1) {
        const exclusionText = raw.substring(exclusionStart);
        console.log("--- EXCLUSION ---");
        console.log(exclusionText.substring(0, 500));
    }

    process.exit(0);
}

run().catch(console.error);
