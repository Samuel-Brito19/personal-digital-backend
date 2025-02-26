import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DATABASE_CONECTION } from 'src/database/database-connection';
import * as schema from './schema';
import { eq } from 'drizzle-orm';
import { exercise } from 'src/exercise/schema';

@Injectable()
export class ExerciseWorkoutService {
  constructor(
    @Inject(DATABASE_CONECTION)
    private readonly database: NodePgDatabase<typeof schema>,
  ) {}

  async getExerciseWorkouts() {
    await this.database
      .select()
      .from(schema.exerciseWorkout)
      .innerJoin(exercise, eq(schema.exerciseWorkout.id, exercise.id));
  }

  async createExerciseWorkouts(
    exerciseWorkout: typeof schema.exerciseWorkout.$inferInsert,
  ) {
    await this.database
      .insert(schema.exerciseWorkout)
      .values(exerciseWorkout)
      .returning();
  }

  async updateExerciseWokouts(
    exerciseWorkoutId: number,
    data: typeof schema.exerciseWorkout.$inferInsert,
  ) {
    await this.database
      .update(schema.exerciseWorkout)
      .set(data)
      .where(eq(schema.exerciseWorkout.id, exerciseWorkoutId));
  }
}
