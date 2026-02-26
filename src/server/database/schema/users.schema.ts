import { relations } from "drizzle-orm";
import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core";

import {
  accountsSchema,
  sessionsSchema
} from "~/server/database/schema.database";

export const usersSchema = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
  lastLoginMethod: text("last_login_method")
});

export const usersRelations = relations(usersSchema, ({ many }) => ({
  sessions: many(sessionsSchema),
  accounts: many(accountsSchema)
}));
