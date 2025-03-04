export class CreateExerciseModuleDTO {
  sets: number;
  duration?: number;
  repetitions?: number;
  weight: number;
  model_id: number;
  personal_id: number;
  done: boolean;
}
