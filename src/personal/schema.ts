import { relations } from 'drizzle-orm';
import { integer, pgTable, text, varchar } from 'drizzle-orm/pg-core';
import { client } from 'src/client/schema';
import { groups } from 'src/groups/schema';
import { models } from 'src/models/schema';
import { user } from 'src/user/schema';

export const personal = pgTable('personal', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  description: text('description').notNull(),
  instagram_link: text('instagram_link').notNull(),
  whatsapp_link: text('whatsapp_link').notNull(),
  cref: varchar('cref', { length: 20 }),
  model_id: integer('model_id').references(() => models.id),
  user_id: integer('user_id').references(() => user.id),
});

export const personalRelations = relations(personal, ({ one, many }) => ({
  client: many(client),
  templates: many(models),
  groups: many(groups),
  user: one(user, {
    fields: [personal.user_id],
    references: [user.id],
  }),
}));
