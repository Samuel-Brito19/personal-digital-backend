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
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, UsersModule, PersonalModule, ExerciseModule, WorkoutsModule, GroupsModule, ModelsModule, ClientModule, ExerciseModuleModule, ExerciseWorkoutModule, AuthModule, UserModule],
  controllers: [ModelsController, UserController],
  providers: [ModelsService, UserService],
})
export class AppModule {}
