import { Controller, Get } from '@nestjs/common';
import { ExerciseWorkoutService } from './exercise-workout.service';

@Controller('exercise-workout')
export class ExerciseWorkoutController {
  constructor(
    private readonly exerciseWorkoutsService: ExerciseWorkoutService,
  ) {}

  @Get(':id')
  async exerciseWorkout(workoutId: number) {
    return this.exerciseWorkoutsService.getExerciseWorkouts(workoutId);
  }
}
