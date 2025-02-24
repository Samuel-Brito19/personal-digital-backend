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

  async getWorkouts(clientId: number) {
    return this.database
      .select()
      .from(schema.workouts)
      .where(eq(schema.workouts.client_id, clientId));
  }

  async getAllWorkouts() {
    return this.database.query.workouts.findMany();
  }

  async findWorkoutByName(name: string) {
    return this.database.query.workouts.findFirst({
      where: eq(schema.workouts.name, name),
    });
  }

  async updateWorkout(
    workoutId: number,
    data: typeof schema.workouts.$inferInsert,
  ) {
    await this.database
      .update(schema.workouts)
      .set(data)
      .where(eq(schema.workouts.id, workoutId))
      .returning();
  }
}
