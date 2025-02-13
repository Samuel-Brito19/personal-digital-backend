import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseModuleService } from './exercise-module.service';

describe('ExerciseModuleService', () => {
  let service: ExerciseModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExerciseModuleService],
    }).compile();

    service = module.get<ExerciseModuleService>(ExerciseModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
