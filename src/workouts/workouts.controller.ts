import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';
import { CreateWorkoutDTO } from './dto/create-workout-dto';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) {}

  @Get()
  async geteAllWorkouts() {
    return this.workoutsService.getWorkouts();
  }

  @Post()
  async createWorkout(@Body() request: CreateWorkoutDTO) {
    return this.workoutsService.createWorkout(request);
  }

  @Get()
  async getWorkoutByName(@Body() name: string) {
    return this.workoutsService.findWorkoutByName(name);
  }

  @Put(':id')
  async updateWorkout(workoutId: number, data: CreateWorkoutDTO) {
    return this.workoutsService.updateWorkout(workoutId, data);
  }
}
