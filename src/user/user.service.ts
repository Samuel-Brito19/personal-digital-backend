import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DATABASE_CONECTION } from 'src/database/database-connection';
import * as schema from './schema';
import { eq } from 'drizzle-orm';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject(DATABASE_CONECTION)
    private readonly database: NodePgDatabase<typeof schema>,
  ) {}

  async findUser(name: string) {
    return this.database.query.user.findFirst({
      where: eq(schema.user.name, name),
    });
  }

  async createUser(user: typeof schema.user.$inferInsert) {
    const { password } = user;
    const hashPassword = await hash(password, 8);

    await this.database.insert(schema.user).values({
      ...user,
      password: hashPassword,
    });
    return user;
  }
}
