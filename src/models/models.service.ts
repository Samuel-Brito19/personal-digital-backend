import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DATABASE_CONECTION } from 'src/database/database-connection';
import * as schema from './schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class ModelsService {
  constructor(
    @Inject(DATABASE_CONECTION)
    private readonly database: NodePgDatabase<typeof schema>,
  ) {}

  async getModels(personalId: number) {
    return this.database.query.models.findMany({
      where: eq(schema.models.id, personalId),
    });
  }

  async createModel(model: typeof schema.models.$inferInsert) {
    return this.database.insert(schema.models).values(model).returning();
  }

  async updateModel(modelId, data: typeof schema.models.$inferInsert) {
    return this.database
      .update(schema.models)
      .set(data)
      .where(eq(schema.models.id, modelId))
      .returning();
  }

  async deleteModel(modelId: number) {
    return this.database
      .delete(schema.models)
      .where(eq(schema.models.id, modelId));
  }
}
