import { Module } from '@nestjs/common';
import { ExerciseWorkoutService } from './exercise-workout.service';
import { ExerciseWorkoutController } from './exercise-workout.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [ExerciseWorkoutService],
  controllers: [ExerciseWorkoutController],
})
export class ExerciseWorkoutModule {}
