
import { db } from "./lib/db/index";
import { studiesRaw, studiesAi, studiesCustom } from "./lib/db/schema";
import { eq, or, ilike, and, sql, desc, inArray } from "drizzle-orm";

async function testSearch(queryText: string) {
    console.log(`\n--- Testing Search for: "${queryText}" ---`);
    const searchPattern = `%${queryText}%`;

    // Exact logic from getStudies
    const titleMatchBoost = sql < number > `
        (CASE 
            WHEN ${studiesRaw.nctId} ILIKE ${queryText} THEN 100.0
            WHEN COALESCE(${studiesAi.titleEs}, '') ILIKE ('%' || ${queryText} || '%') THEN 80.0
            WHEN COALESCE(${studiesAi.titleSimpleEs}, '') ILIKE ('%' || ${queryText} || '%') THEN 80.0
            WHEN COALESCE(${studiesRaw.briefTitle}, '') ILIKE ('%' || ${queryText} || '%') THEN 60.0
            WHEN COALESCE(${studiesRaw.officialTitle}, '') ILIKE ('%' || ${queryText} || '%') THEN 60.0
            WHEN COALESCE(${studiesRaw.primaryCondition}, '') ILIKE ('%' || ${queryText} || '%') THEN 40.0
            WHEN COALESCE(${studiesAi.briefSummaryEs}, '') ILIKE ('%' || ${queryText} || '%') THEN 10.0
            ELSE 0.0 
        END)
    `;

    const ftsRank = sql < number > `
        COALESCE(ts_rank(
            setweight(to_tsvector('simple', COALESCE(${studiesAi.titleEs}, '')), 'A') ||
            setweight(to_tsvector('simple', COALESCE(${studiesAi.titleSimpleEs}, '')), 'A') ||
            setweight(to_tsvector('simple', COALESCE(${studiesRaw.briefTitle}, '')), 'B') ||
            setweight(to_tsvector('simple', COALESCE(${studiesRaw.officialTitle}, '')), 'B') ||
            setweight(to_tsvector('simple', COALESCE(${studiesRaw.primaryCondition}, '')), 'B') ||
            setweight(to_tsvector('simple', COALESCE(${studiesAi.briefSummaryEs}, '')), 'C') ||
            setweight(to_tsvector('simple', COALESCE(${studiesRaw.briefSummary}, '')), 'D'),
            plainto_tsquery('simple', ${queryText})
        ), 0.0)
    `;

    const totalRank = sql`(${titleMatchBoost} + ${ftsRank})`;

    const results = await db
        .select({
            id: studiesRaw.nctId,
            rank: totalRank,
            boost: titleMatchBoost,
            fts: ftsRank
        })
        .from(studiesRaw)
        .leftJoin(studiesAi, eq(studiesRaw.nctId, studiesAi.nctId))
        .where(
            or(
                eq(studiesRaw.nctId, queryText),
                ilike(studiesRaw.nctId, searchPattern),
                ilike(studiesAi.titleEs, searchPattern),
                ilike(studiesAi.titleSimpleEs, searchPattern),
                ilike(studiesRaw.briefTitle, searchPattern),
                ilike(studiesRaw.primaryCondition, searchPattern),
                ilike(studiesAi.briefSummaryEs, searchPattern),
                sql`(
                    to_tsvector('simple', COALESCE(${studiesAi.titleEs}, '')) ||
                    to_tsvector('simple', COALESCE(${studiesAi.titleSimpleEs}, '')) ||
                    to_tsvector('simple', COALESCE(${studiesRaw.briefTitle}, '')) ||
                    to_tsvector('simple', COALESCE(${studiesRaw.officialTitle}, '')) ||
                    to_tsvector('simple', COALESCE(${studiesRaw.primaryCondition}, '')) ||
                    to_tsvector('simple', COALESCE(${studiesAi.briefSummaryEs}, '')) ||
                    to_tsvector('simple', COALESCE(${studiesRaw.briefSummary}, ''))
                ) @@ plainto_tsquery('simple', ${queryText})`
            )
        )
        .orderBy(sql`${totalRank} DESC`)
        .limit(5);

    console.log(`Found ${results.length} results.`);
    results.forEach(r => console.log(`ID: ${r.id} Rank: ${r.rank} Boost: ${r.boost} FTS: ${r.fts}`));
}

async function run() {
    await testSearch("diabetes");
    await testSearch("Parkinson");
    await testSearch("esclerosis");
    process.exit(0);
}

run().catch(console.error);
