import { relations } from 'drizzle-orm';
import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';
import { client } from 'src/client/schema';
import { exercise } from 'src/exercise/schema';
import { models } from 'src/models/schema';
import { personal } from 'src/personal/schema';

export const workouts = pgTable('workouts', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  personalId: integer('personalId').references(() => personal.id, {
    onDelete: 'cascade',
  }),
  clientId: integer('clientId').references(() => client.id, {
    onDelete: 'cascade',
  }),
  model_id: integer('model_id')
    .references(() => models.id, { onDelete: 'set null' })
    .default(null),
});

export const workoutRelations = relations(workouts, ({ one, many }) => ({
  exercises: many(exercise),
  personal: one(personal, {
    fields: [workouts.personalId],
    references: [personal.id],
  }),
  clients: one(client, {
    fields: [workouts.clientId],
    references: [client.id],
  }),
  model: one(models, {
    fields: [workouts.model_id],
    references: [models.id],
  }),
}));
