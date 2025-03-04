import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { CreateExerciseDTO } from './dto/create-exercise-dto';

@Controller('exercise')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Get()
  async findExercises() {
    return this.exerciseService.getAllExercises();
  }

  @Post()
  async createExercise(@Body() request: CreateExerciseDTO) {
    return this.exerciseService.createExercise(request);
  }

  @Put(':id')
  async updateExercise(
    @Param('id') exerciseId: number,
    @Body() request: CreateExerciseDTO,
  ) {
    await this.exerciseService.updateExercise(exerciseId, request);
  }

  @Delete(':id')
  async deleteExercise(exerciseId: number) {
    return this.exerciseService.deleteExercise(exerciseId);
  }
}
