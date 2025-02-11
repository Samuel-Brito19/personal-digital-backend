import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { PersonalModule } from './personal/personal.module';
import { ExerciseModule } from './exercise/exercise.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, UsersModule, PersonalModule, ExerciseModule],
  controllers: [],
})
export class AppModule {}
