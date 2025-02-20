import { relations, sql } from 'drizzle-orm';
import { boolean, check, integer, pgTable, text } from 'drizzle-orm/pg-core';
import { exercise } from 'src/exercise/schema';
import { models } from 'src/models/schema';

export const exerciseModule = pgTable(
  'exerciseModule',
  {
    id: integer().primaryKey(),
    sets: integer().notNull(),
    duration: integer(),
    repetitions: integer(),
    weight: integer(),
    model_id: integer('model_id').references(() => models.id),
    exercise_id: integer('exercise_id').references(() => exercise.id),
    done: boolean().notNull(),
    link: text().notNull(),
  },
  (table) => [
    check(
      'only_one',
      sql`(${table.duration} IS NOT NULL AND ${table.repetitions} IS NULL) OR
           (${table.repetitions} IS NOT NULL AND ${table.duration} IS NULL)`,
    ),
  ],
);

export const exerciseModuleRelations = relations(exerciseModule, ({ one }) => ({
  model: one(models, {
    fields: [exerciseModule.model_id],
    references: [models.id],
  }),
  exercise: one(exercise, {
    fields: [exerciseModule.exercise_id],
    references: [exercise.id],
  }),
}));
