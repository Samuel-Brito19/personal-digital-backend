import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { PersonalModule } from './personal/personal.module';
import { ExerciseModule } from './exercise/exercise.module';
import { WorkoutsModule } from './workouts/workouts.module';
import { GroupsModule } from './groups/groups.module';
import { ModelsModule } from './models/models.module';
import { ClientModule } from './client/client.module';
import { ExerciseWorkoutModule } from './exercise-workout/exercise-workout.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    PersonalModule,
    ExerciseModule,
    WorkoutsModule,
    GroupsModule,
    ModelsModule,
    ClientModule,
    ExerciseWorkoutModule,
    AuthModule,
    UserModule,
  ],
  controllers: [],
})
export class AppModule {}
