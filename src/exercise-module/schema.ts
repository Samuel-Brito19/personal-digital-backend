import { relations, sql } from 'drizzle-orm';
import { boolean, check, integer, pgTable, text } from 'drizzle-orm/pg-core';
import { exercise } from 'src/exercise/schema';
import { workouts } from 'src/workouts/schema';

export const exerciseModule = pgTable(
  'exerciseModule',
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    sets: integer().notNull(),
    duration: integer(),
    repetitions: integer(),
    weight: integer(),
    workoutId: integer('workoutId').references(() => workouts.id),
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
