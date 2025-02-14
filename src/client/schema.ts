import { relations } from 'drizzle-orm';
import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';
import { personal } from 'src/personal/schema';
import { workouts } from 'src/workouts/schema';

export const client = pgTable('client', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  personal_id: integer('personal_id').references(() => personal.id),
  workout_id: integer('workout_id').references(() => workouts.id),
});

export const clientRelations = relations(client, ({ one, many }) => ({
  personal: one(personal, {
    fields: [client.personal_id],
    references: [personal.id],
  }),
  workouts: many(workouts),
}));
