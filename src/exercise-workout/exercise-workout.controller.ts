import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ExerciseWorkoutService } from './exercise-workout.service';

@Controller('exercise-workout')
export class ExerciseWorkoutController {
  constructor(
    private readonly exerciseWorkoutsService: ExerciseWorkoutService,
  ) {}

  @Get(':id')
  async getExerciseWorkout(workoutId: number) {
    return this.exerciseWorkoutsService.getExerciseWorkouts(workoutId);
  }

  @Post()
  async createExerciseWorkout(request: CreateExerciseWorkoutDTO) {
    return this.exerciseWorkoutsService.createExerciseWorkouts(request);
  }

  @Put('id')
  async updateExerciseWorkout(
    exerciseWorkoutId: number,
    data: CreateExerciseDTO,
  ) {
    return this.updateExerciseWorkout(exerciseWorkoutId, data);
  }

  @Delete('id')
  async deleteExerciseWorkout(exerciseWorkoutId: number) {
    return this.exerciseWorkoutsService.deleteExerciseWorkout(
      exerciseWorkoutId,
    );
  }
}
