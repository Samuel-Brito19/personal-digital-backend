import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DATABASE_CONECTION } from 'src/database/database-connection';
import * as schema from './schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class WorkoutsService {
  constructor(
    @Inject(DATABASE_CONECTION)
    private readonly database: NodePgDatabase<typeof schema>,
  ) {}

  async createWorkout(workout: typeof schema.workouts.$inferInsert) {
    await this.database.insert(schema.workouts).values(workout).returning();
  }

  async getWorkouts() {
    await this.database.query.workouts.findMany();
  }

  async findWorkoutByName(name: string) {
    return this.database.query.workouts.findFirst({
      where: eq(schema.workouts.name, name),
    });
  }

  async updateWorkout(id: number, data: typeof schema.workouts.$inferInsert) {
    return this.database
      .update(schema.workouts)
      .set(data)
      .where(eq(schema.workouts.id, id))
      .returning();
  }
}
