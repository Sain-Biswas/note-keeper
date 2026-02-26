import { relations } from "drizzle-orm";
import { index, pgTable, text, timestamp } from "drizzle-orm/pg-core";

import { usersSchema } from "~/server/database/schema.database";

export const sessionsSchema = pgTable(
  "sessions",
  {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expires_at").notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => usersSchema.id, { onDelete: "cascade" })
  },
  table => [index("session_userId_idx").on(table.userId)]
);

export const sessionsRelations = relations(sessionsSchema, ({ one }) => ({
  user: one(usersSchema, {
    fields: [sessionsSchema.userId],
    references: [usersSchema.id]
  })
}));
