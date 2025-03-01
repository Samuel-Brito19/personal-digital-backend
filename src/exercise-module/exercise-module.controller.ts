import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ExerciseModuleService } from './exercise-module.service';

@Controller('exercise-module')
export class ExerciseModuleController {
  constructor(private readonly exerciseService: ExerciseModuleService) {}

  @Get('id')
  async getExerciseModules(@Param('id') modelId: number) {
    return this.exerciseService.getExerciseModules(modelId);
  }

  @Post()
  async createExerciseModules(@Body() request: CreateExerciseModuleDTO) {
    return this.exerciseService.createExerciseModule(request);
  }

  @Put(':id')
  async updateExerciseModule(
    @Param('id') exerciseModuleId: number,
    @Body() data: CreateExerciseModuleDTO,
  ) {
    return this.exerciseService.updateExerciseModule(exerciseModuleId, data);
  }

  @Delete(':id')
  async deleteExerciseModule(@Param('id') exerciseModuleId: number) {
    return this.exerciseService.deleteExerciseModule(exerciseModuleId);
  }
}
