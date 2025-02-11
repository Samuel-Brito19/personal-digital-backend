import { relations } from 'drizzle-orm';
import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';
import { personal } from 'src/personal/schema';

export const users = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  personal_id: integer('personal_id').references(() => personal.id),
});

export const usersRelation = relations(users, ({ one }) => ({
  personal: one(personal, {
    fields: [users.personal_id],
    references: [personal.id],
  }),
}));
