import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseModuleController } from './exercise-module.controller';

describe('ExerciseModuleController', () => {
  let controller: ExerciseModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExerciseModuleController],
    }).compile();

    controller = module.get<ExerciseModuleController>(ExerciseModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
