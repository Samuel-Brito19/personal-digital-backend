import { relations } from 'drizzle-orm';
import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';
import { client } from 'src/client/schema';

export const groups = pgTable('groups', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
});

export const groupsRelations = relations(groups, ({ one, many }) => ({
  clients: many(client),
}));
