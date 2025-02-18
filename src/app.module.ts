import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { PersonalModule } from './personal/personal.module';
import { ExerciseModule } from './exercise/exercise.module';
import { WorkoutsModule } from './workouts/workouts.module';
import { GroupsModule } from './groups/groups.module';
import { ModelsController } from './models/models.controller';
import { ModelsService } from './models/models.service';
import { ModelsModule } from './models/models.module';
import { ClientModule } from './client/client.module';
import { ExerciseModuleModule } from './exercise-module/exercise-module.module';
import { ExerciseWorkoutModule } from './exercise-workout/exercise-workout.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, UsersModule, PersonalModule, ExerciseModule, WorkoutsModule, GroupsModule, ModelsModule, ClientModule, ExerciseModuleModule, ExerciseWorkoutModule],
  controllers: [ModelsController],
  providers: [ModelsService],
})
export class AppModule {}
