import { BadRequestException, Inject, Injectable } from '@nestjs/common';
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
    const { password, email } = user;
    const hashPassword = await hash(password, 8);

    if (!email.includes('@') || !email.includes('.com')) {
      throw new BadRequestException('Email inválido!');
    }
    if (password.length < 6) {
      throw new BadRequestException('Senha muito curta!');
    }

    await this.database.insert(schema.user).values({
      ...user,
      password: hashPassword,
    });
    return user;
  }

  async getAllUsers() {
    return this.database.query.user.findMany({
      columns: {
        id: true,
        name: true,
        email: true,
      },
    });
  }

  async updateUser(userId: number, user: typeof schema.user.$inferInsert) {
    return this.database
      .update(schema.user)
      .set(user)
      .where(eq(schema.user.id, userId))
      .returning();
  }
}
