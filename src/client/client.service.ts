import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DATABASE_CONECTION } from 'src/database/database-connection';
import * as schema from './schema';
import { and, eq } from 'drizzle-orm';
import { personal } from 'src/personal/schema';

@Injectable()
export class ClientService {
  constructor(
    @Inject(DATABASE_CONECTION)
    private readonly database: NodePgDatabase<typeof schema>,
  ) {}

  async findClients() {
    await this.database.query.client.findMany();
  }

  async findPersonalClients(personalId: number) {
    return this.database
      .select()
      .from(schema.client)
      .where(eq(schema.client.personal_id, personalId));
  }

  async createClient(client: typeof schema.client.$inferInsert) {
    await this.database.insert(schema.client).values(client).returning();
  }

  async getClientByName(name: string, personalId: number) {
    await this.database.select();
  }

  async updateClient(clientId, data: typeof schema.client.$inferInsert) {
    await this.database
      .update(schema.client)
      .set(data)
      .where(eq(schema.client.id, clientId))
      .returning();
  }
}
