import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { envServer } from "~/constant/env-server";
import { database } from "../database/index.database";

export const auth = betterAuth({
  database: drizzleAdapter(database, {
    provider: "pg"
  }),

  emailAndPassword: {
    enabled: true
  },

  socialProviders: {
    github: {
      clientId: envServer.GITHUB_CLIENT_ID,
      clientSecret: envServer.GITHUB_CLIENT_SECRET
    },
    google: {
      clientId: envServer.GOOGLE_CLIENT_ID,
      clientSecret: envServer.GOOGLE_CLIENT_SECRET
    }
  },

  plugins: [nextCookies()]
});
