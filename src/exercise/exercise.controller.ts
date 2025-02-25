import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ExerciseService } from './exercise.service';

@Controller('exercise')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Get()
  async findExercises() {
    return this.exerciseService.getAllExercises();
  }

  @Post()
  async createExercise(request: CreateExerciseDTO) {
    return this.exerciseService.createExercise(request);
  }

  @Put(':id')
  async updateExercise(exerciseId: number, request: CreateExerciseDTO) {
    await this.exerciseService.updateExercise(exerciseId, request);
  }

  @Delete(':id')
  async deleteExercise(exerciseId: number) {
    return this.exerciseService.deleteExercise(exerciseId);
  }
}
