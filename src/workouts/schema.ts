import { relations } from 'drizzle-orm';
import { integer, pgTable, text } from 'drizzle-orm/pg-core';
import { client } from 'src/client/schema';
import { exercise } from 'src/exercise/schema';
import { models } from 'src/models/schema';
import { personal } from 'src/personal/schema';

export const workouts = pgTable('workouts', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull(),
  personal_id: integer('personal_id').references(() => personal.id, {
    onDelete: 'cascade',
  }),
  client_id: integer('clientId').references(() => client.id, {
    onDelete: 'cascade',
  }),
  model_id: integer('model_id')
    .references(() => models.id, { onDelete: 'set null' })
    .default(null),
});

export const workoutRelations = relations(workouts, ({ one, many }) => ({
  exercises: many(exercise),
  personal: one(personal, {
    fields: [workouts.personal_id],
    references: [personal.id],
  }),
  clients: one(client, {
    fields: [workouts.client_id],
    references: [client.id],
  }),
  model: one(models, {
    fields: [workouts.model_id],
    references: [models.id],
  }),
}));
