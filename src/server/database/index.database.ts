import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { envServer } from "~/constant/env-server";

import * as schema from "~/server/database/schema.database";

const client = neon(envServer.DATABASE_URL);

export const database = drizzle({
  client,
  schema
});
