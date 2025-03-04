import { relations } from 'drizzle-orm';
import { integer, pgTable, text } from 'drizzle-orm/pg-core';
import { groups } from 'src/groups/schema';
import { personal } from 'src/personal/schema';
import { user } from 'src/user/schema';
import { workouts } from 'src/workouts/schema';

export const client = pgTable('client', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  age: integer().notNull(),
  height: integer().notNull(),
  weight: integer().notNull(),
  email: text().notNull(),
  user_id: integer('user_id').references(() => user.id),
  personal_id: integer('personal_id').references(() => personal.id),
  group_id: integer('group_id').references(() => groups.id),
});

export const clientRelations = relations(client, ({ one, many }) => ({
  personal: one(personal, {
    fields: [client.personal_id],
    references: [personal.id],
  }),
  workouts: many(workouts),
  group: one(groups, {
    fields: [client.group_id],
    references: [groups.id],
  }),
  user: one(user, {
    fields: [client.user_id],
    references: [user.id],
  }),
}));
