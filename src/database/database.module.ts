import { Module } from '@nestjs/common';
import { DATABASE_CONECTION } from './database-connection';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as clientSchema from '../client/schema';
import * as personalSchema from '../personal/schema';
import * as workoutSchema from '../workouts/schema';
import * as modelsSchema from '../models/schema';
import * as exerciseShema from '../exercise/schema';
import * as exerciseModuleSchema from '../exercise-module/schema';
import * as exerciseWorkoutSchema from '../exercise-workout/schema';
import * as groupsSchema from '../groups/schema';

@Module({
  providers: [
    {
      provide: DATABASE_CONECTION,
      useFactory: (configService: ConfigService) => {
        const pool = new Pool({
          connectionString: configService.getOrThrow('DATABASE_URL'),
        });
        return drizzle(pool, {
          schema: {
            ...clientSchema,
            ...personalSchema,
            ...workoutSchema,
            ...exerciseModuleSchema,
            ...exerciseShema,
            ...exerciseWorkoutSchema,
            ...groupsSchema,
            ...modelsSchema,
          },
        });
      },
      inject: [ConfigService],
    },
  ],
})
export class DatabaseModule {}
