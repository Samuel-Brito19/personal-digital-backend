import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseWorkoutController } from './exercise-workout.controller';

describe('ExerciseWorkoutController', () => {
  let controller: ExerciseWorkoutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExerciseWorkoutController],
    }).compile();

    controller = module.get<ExerciseWorkoutController>(ExerciseWorkoutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
