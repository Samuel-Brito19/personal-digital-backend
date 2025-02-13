import { relations } from 'drizzle-orm';
import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';
import { exercise } from 'src/exercise/schema';
import { personal } from 'src/personal/schema';

export const workouts = pgTable('workouts', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  personal: integer('personal').references(() => personal.id),
});

export const workoutRelations = relations(workouts, ({ many }) => ({
  exercises: many(exercise),
}));
