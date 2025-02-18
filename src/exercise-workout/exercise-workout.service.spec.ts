import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseWorkoutService } from './exercise-workout.service';

describe('ExerciseWorkoutService', () => {
  let service: ExerciseWorkoutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExerciseWorkoutService],
    }).compile();

    service = module.get<ExerciseWorkoutService>(ExerciseWorkoutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
