import { relations } from 'drizzle-orm';
import { integer, pgTable, text } from 'drizzle-orm/pg-core';
import { client } from 'src/client/schema';

export const groups = pgTable('groups', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull(),
});

export const groupsRelations = relations(groups, ({ one, many }) => ({
  clients: many(client),
}));
