import { defineConfig } from "drizzle-kit";
import { envServer } from "~/constant/env-server";

export default defineConfig({
  out: "./.drizzle",
  schema: "./src/server/database/schema.database.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: envServer.DATABASE_URL
  }
});
