import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DATABASE_CONECTION } from 'src/database/database-connection';
import * as schema from './schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class ClientService {
  constructor(
    @Inject(DATABASE_CONECTION)
    private readonly database: NodePgDatabase<typeof schema>,
  ) {}

  async findClients() {
    await this.database.query.client.findMany();
  }

  async createClient(client: typeof schema.client.$inferInsert) {
    await this.database.insert(schema.client).values(client).returning();
  }

  async getClientByName(name: string) {
    await this.database.query.client.findFirst({
      where: eq(schema.client.name, name),
    });
  }

  async updateClient(clientId, data: typeof schema.client.$inferInsert) {
    await this.database
      .update(schema.client)
      .set(data)
      .where(eq(schema.client.id, clientId))
      .returning();
  }
}
