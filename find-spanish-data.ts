
import { db } from "./lib/db/index";
import { studiesAi } from "./lib/db/schema";
import { isNotNull, sql } from "drizzle-orm";

async function run() {
    console.log("Searching for studies with translated criteria...");

    const results = await db
        .select({
            id: studiesAi.nctId,
            key: studiesAi.keyEligibilityEs
        })
        .from(studiesAi)
        .where(isNotNull(studiesAi.keyEligibilityEs))
        .limit(10);

    console.log(`Found ${results.length} studies with keyEligibilityEs.`);
    results.forEach(r => console.log(`${r.id}: ${r.key?.substring(0, 50)}...`));
    process.exit(0);
}

run().catch(console.error);
