import { integer, pgTable, text, varchar } from 'drizzle-orm/pg-core';

export const exercise = pgTable('exercise', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: text('description').notNull(),
});
