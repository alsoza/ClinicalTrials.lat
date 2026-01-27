
import { db } from "./lib/db/index.js";
import { sql } from "drizzle-orm";

async function checkTables() {
    console.log("Checking database tables...");
    try {
        const result = await db.execute(sql`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`);
        console.log("Tables found:", result.rows.map(r => r.table_name));
    } catch (err) {
        console.error("Error listing tables:", err);
    }
    process.exit(0);
}

checkTables();
