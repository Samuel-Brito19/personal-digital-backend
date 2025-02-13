import { relations } from 'drizzle-orm';
import { integer, pgTable, text, varchar } from 'drizzle-orm/pg-core';
import { client } from 'src/client/schema';

export const personal = pgTable('personal', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: text('description').notNull(),
  instagram_link: text('instagram_link').notNull(),
  whatsapp_link: text('whatsapp_link').notNull(),
});

export const personalRelations = relations(personal, ({ many }) => ({
  client: many(client),
}));
