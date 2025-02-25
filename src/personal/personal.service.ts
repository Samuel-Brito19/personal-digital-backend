import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DATABASE_CONECTION } from 'src/database/database-connection';
import * as schema from './schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class PersonalService {
  constructor(
    @Inject(DATABASE_CONECTION)
    private readonly database: NodePgDatabase<typeof schema>,
  ) {}

  async createPersonal(personal: typeof schema.personal.$inferInsert) {
    await this.database.insert(schema.personal).values(personal).returning();
  }

  async getPersonals() {
    return this.database.query.personal.findMany();
  }

  async getPersonalByName(name: string) {
    return this.database.query.personal.findFirst({
      where: eq(schema.personal.name, name),
    });
  }

  async updatePersonal(
    personalId: number,
    data: typeof schema.personal.$inferInsert,
  ) {
    await this.database
      .update(schema.personal)
      .set(data)
      .where(eq(schema.personal.id, personalId))
      .returning();
  }

  async deletePersonal(personalId: number) {
    return this.database
      .delete(schema.personal)
      .where(eq(schema.personal.id, personalId));
  }
}
