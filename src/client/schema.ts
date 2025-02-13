import { relations } from 'drizzle-orm';
import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';
import { personal } from 'src/personal/schema';

export const client = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  personal_id: integer('personal_id').references(() => personal.id),
});

export const usersRelation = relations(client, ({ one }) => ({
  personal: one(personal, {
    fields: [client.personal_id],
    references: [personal.id],
  }),
}));
