import { relations } from 'drizzle-orm';
import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';
import { client } from 'src/client/schema';
import { exercise } from 'src/exercise/schema';
import { personal } from 'src/personal/schema';

export const workouts = pgTable('workouts', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  personalId: integer('personalId').references(() => personal.id),
  clientId: integer('clientId').references(() => client.id),
});

export const workoutRelations = relations(workouts, ({ one, many }) => ({
  exercises: many(exercise),
  clients: one(workouts, {
    fields: [workouts.clientId],
    references: [client.id],
  }),
}));
