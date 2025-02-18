import { relations, sql } from 'drizzle-orm';
import { boolean, check, integer, pgTable, text } from 'drizzle-orm/pg-core';
import { exercise } from 'src/exercise/schema';
import { workouts } from 'src/workouts/schema';

export const exerciseWorkout = pgTable(
  'exerciseWorkout',
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    sets: integer().notNull(),
    duration: integer(),
    repetitions: integer(),
    weight: integer(),
    workout_id: integer('model_id').references(() => workouts.id),
    exerciseId: integer('exerciseId').references(() => exercise.id),
    done: boolean().notNull(),
    link: text().notNull(),
  },
  (table) => [
    check(
      'only_one',
      sql`${table.duration} IS NOT NULL AND ${table.repetitions} IS NULL
            ${table.repetitions} IS NOT NULL AND ${table.duration} IS NULL`,
    ),
  ],
);

export const exerciseWorkoutRelations = relations(
  exerciseWorkout,
  ({ one }) => ({
    workout: one(workouts, {
      fields: [exerciseWorkout.workout_id],
      references: [workouts.id],
    }),
    exercise: one(exercise, {
      fields: [exerciseWorkout.exerciseId],
      references: [exercise.id],
    }),
  }),
);
