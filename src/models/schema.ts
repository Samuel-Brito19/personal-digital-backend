import { relations } from 'drizzle-orm';
import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';
import { exerciseModule } from 'src/exercise-module/schema';
import { personal } from 'src/personal/schema';
import { workouts } from 'src/workouts/schema';

export const models = pgTable('models', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  personalId: integer('personalId').references(() => personal.id, {
    onDelete: 'cascade',
  }),
});

export const modelsRelations = relations(models, ({ one, many }) => ({
  personal: one(personal, {
    fields: [models.personalId],
    references: [personal.id],
  }),
  exerciseModel: many(exerciseModule),
  workouts: many(workouts),
}));
