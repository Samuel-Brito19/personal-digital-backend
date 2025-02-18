import { Module } from '@nestjs/common';
import { ExerciseWorkoutService } from './exercise-workout.service';
import { ExerciseWorkoutController } from './exercise-workout.controller';

@Module({
  providers: [ExerciseWorkoutService],
  controllers: [ExerciseWorkoutController]
})
export class ExerciseWorkoutModule {}
