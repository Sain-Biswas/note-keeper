import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./.drizzle",
  schema: "./src/server/database/schema.database.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
