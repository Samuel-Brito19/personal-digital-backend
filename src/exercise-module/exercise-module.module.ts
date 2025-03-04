import { Module } from '@nestjs/common';
import { ExerciseModuleController } from './exercise-module.controller';
import { ExerciseModuleService } from './exercise-module.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ExerciseModuleController],
  providers: [ExerciseModuleService],
  exports: [ExerciseModuleService],
})
export class ExerciseModuleModule {}
