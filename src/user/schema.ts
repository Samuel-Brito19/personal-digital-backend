import { relations } from 'drizzle-orm';
import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';
import { client } from 'src/client/schema';
import { personal } from 'src/personal/schema';

export const user = pgTable('user', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
});

export const userRelations = relations(user, ({ one }) => ({
  client: one(client, {
    fields: [user.id],
    references: [client.user_id],
  }),
  personal: one(personal, {
    fields: [user.id],
    references: [personal.user_id],
  }),
}));
