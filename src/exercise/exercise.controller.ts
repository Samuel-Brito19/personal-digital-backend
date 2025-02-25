import { Controller, Get, Post } from '@nestjs/common';
import { ExerciseService } from './exercise.service';

@Controller('exercise')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Get()
  async findExercises() {
    return this.exerciseService.getAllExercises();
  }

  @Post()
  async createExercise(data: CreateExerciseDTO) {
    return this.exerciseService.createExercise(data);
  }
}
