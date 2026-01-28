import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL!;

// For query purposes
const queryClient = postgres(connectionString, {
    ssl: { rejectUnauthorized: false },
    prepare: false, // supabase/pooled connections often need this or similar
});
export const db = drizzle(queryClient, { schema });
