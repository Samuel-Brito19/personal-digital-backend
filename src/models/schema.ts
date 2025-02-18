import { relations } from 'drizzle-orm';
import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';
import { personal } from 'src/personal/schema';

export const models = pgTable('models', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  personalId: integer('personalId').references(() => personal.id, {
    onDelete: 'cascade',
  }),
});

export const modelsRelations = relations(models, ({ one }) => ({
  personal: one(personal, {
    fields: [models.personalId],
    references: [personal.id],
  }),
}));
