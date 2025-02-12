import { sql } from 'drizzle-orm';
import {
  boolean,
  check,
  integer,
  pgTable,
  text,
  varchar,
} from 'drizzle-orm/pg-core';

export const exercise = pgTable(
  'exercise',
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    sets: integer().notNull(),
    duration: integer(),
    repetitions: integer(),
    weight: integer(),
    description: text('description').notNull(),
    done: boolean().notNull(),
  },
  (table) => [
    check(
      'only_one',
      sql`${table.duration} IS NOT NULL AND ${table.repetitions} IS NULL
        ${table.repetitions} IS NOT NULL AND ${table.duration} IS NULL`,
    ),
  ],
);
