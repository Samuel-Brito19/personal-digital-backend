import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DATABASE_CONECTION } from 'src/database/database-connection';
import * as schema from './schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class ExerciseService {
  constructor(
    @Inject(DATABASE_CONECTION)
    private readonly database: NodePgDatabase<typeof schema>,
  ) {}

  async getAllExercises() {
    return this.database.query.exercise.findMany();
  }

  async createExercise(exercise: typeof schema.exercise.$inferInsert) {
    await this.database.insert(schema.exercise).values(exercise).returning();
  }

  async updateExercise(
    exerciseId: number,
    data: typeof schema.exercise.$inferInsert,
  ) {
    await this.database
      .update(schema.exercise)
      .set(data)
      .where(eq(schema.exercise.id, exerciseId))
      .returning();
  }
}
