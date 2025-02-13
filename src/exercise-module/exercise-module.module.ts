import { Module } from '@nestjs/common';
import { ExerciseModuleController } from './exercise-module.controller';
import { ExerciseModuleService } from './exercise-module.service';

@Module({
  controllers: [ExerciseModuleController],
  providers: [ExerciseModuleService]
})
export class ExerciseModuleModule {}
