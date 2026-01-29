
import { db } from "./lib/db/index";
import { studiesRaw, studiesAi } from "./lib/db/schema";
import { eq, ilike } from "drizzle-orm";

async function run() {
    const id = "NCT06737614";
    console.log(`Inspecting data for ${id}...`);

    const results = await db
        .select({
            key: studiesAi.keyEligibilityEs
        })
        .from(studiesAi)
        .where(eq(studiesAi.nctId, id))
        .limit(1);

    console.log(`Key Eligibility ES for ${id}:`, results[0]?.key);
    process.exit(0);
}

run().catch(console.error);
