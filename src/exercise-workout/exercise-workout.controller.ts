import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ExerciseWorkoutService } from './exercise-workout.service';
import { CreateExerciseWorkoutDTO } from './dto/exercise-workout-dto';

@Controller('exercise-workout')
export class ExerciseWorkoutController {
  constructor(
    private readonly exerciseWorkoutsService: ExerciseWorkoutService,
  ) {}

  @Get(':id')
  async getExerciseWorkout(@Param('id') workoutId: number) {
    return this.exerciseWorkoutsService.getExerciseWorkouts(workoutId);
  }

  @Post()
  async createExerciseWorkout(@Body() request: CreateExerciseWorkoutDTO) {
    return this.exerciseWorkoutsService.createExerciseWorkouts(request);
  }

  @Put('id')
  async updateExerciseWorkout(
    @Param('id')
    exerciseWorkoutId: number,
    @Body()
    data: CreateExerciseWorkoutDTO,
  ) {
    return this.updateExerciseWorkout(exerciseWorkoutId, data);
  }

  @Delete('id')
  async deleteExerciseWorkout(@Param('id') exerciseWorkoutId: number) {
    return this.exerciseWorkoutsService.deleteExerciseWorkout(
      exerciseWorkoutId,
    );
  }
}
