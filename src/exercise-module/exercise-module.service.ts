import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DATABASE_CONECTION } from 'src/database/database-connection';
import * as schema from './schema';
import { exercise } from 'src/exercise/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class ExerciseModuleService {
  constructor(
    @Inject(DATABASE_CONECTION)
    private readonly database: NodePgDatabase<typeof schema>,
  ) {}

  async getExerciseModules(moduleId: number) {
    return this.database
      .select()
      .from(schema.exerciseModule)
      .innerJoin(exercise, eq(schema.exerciseModule.exercise_id, exercise.id))
      .where(eq(schema.exerciseModule.model_id, moduleId));
  }

  async createExerciseModule(
    exerciseModule: typeof schema.exerciseModule.$inferInsert,
  ) {
    await this.database
      .insert(schema.exerciseModule)
      .values(exerciseModule)
      .returning();
  }

  async updateExerciseModule(
    exerciseModuleId: number,
    data: typeof schema.exerciseModule.$inferInsert,
  ) {
    await this.database
      .update(schema.exerciseModule)
      .set(data)
      .where(eq(schema.exerciseModule.id, exerciseModuleId))
      .returning();
  }

  async deleteExerciseModule(exerciseModuleId: number) {
    await this.database
      .delete(schema.exerciseModule)
      .where(eq(schema.exerciseModule.id, exerciseModuleId))
      .returning();
  }
}
