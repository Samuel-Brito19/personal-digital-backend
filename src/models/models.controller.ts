import { Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { ModelsService } from './models.service';
import { date } from 'drizzle-orm/mysql-core';
import { CreateModelDTO } from './dto/create-model-dto';
import { CreateExerciseDTO } from 'src/exercise/dto/create-exercise-dto';

@Controller('models')
export class ModelsController {
  constructor(private readonly modelsService: ModelsService) {}

  @Get(':id')
  async getModels(@Param('id') personalId: number) {
    return this.modelsService.getModels(personalId);
  }

  @Put()
  async createModel(request: CreateModelDTO) {
    return this.modelsService.createModel(request);
  }

  @Put(':id')
  async updateModel(@Param('id') modelId: number, data: CreateExerciseDTO) {
    return this.modelsService.updateModel(modelId, data);
  }

  @Delete(':id')
  async deleteModel(@Param('id') modelId: number) {
    this.modelsService.deleteModel(modelId);
  }
}
