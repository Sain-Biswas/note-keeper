import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { lastLoginMethod, openAPI } from "better-auth/plugins";

import { nextCookies } from "better-auth/next-js";

import { envServer } from "~/constant/env-server";
import { database } from "~/server/database/index.database";

import {
  accountsSchema,
  sessionsSchema,
  usersSchema,
  verificationsSchema
} from "~/server/database/schema.database";

export const auth = betterAuth({
  appName: "Note Keeper",

  database: drizzleAdapter(database, {
    provider: "pg",
    schema: {
      user: usersSchema,
      account: accountsSchema,
      session: sessionsSchema,
      verification: verificationsSchema
    }
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

  plugins: [
    nextCookies(),
    lastLoginMethod({ storeInDatabase: true }),
    openAPI({
      disableDefaultReference: envServer.NODE_ENV !== "development",
      theme: "deepSpace"
    })
  ]
});
