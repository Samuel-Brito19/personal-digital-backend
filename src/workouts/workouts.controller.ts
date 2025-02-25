import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { WorkoutsService } from './workouts.service';
import { CreateWorkoutDTO } from './dto/create-workout-dto';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) {}

  @Get(':id')
  async getClientWorkouts(@Param('id') clientId: number) {
    return this.workoutsService.getWorkouts(clientId);
  }

  @Post()
  async createWorkout(@Body() request: CreateWorkoutDTO) {
    return this.workoutsService.createWorkout(request);
  }

  @Get(':name')
  async getWorkoutByName(@Body() name: string) {
    return this.workoutsService.findWorkoutByName(name);
  }

  @Put(':id')
  async updateWorkout(workoutId: number, data: CreateWorkoutDTO) {
    return this.workoutsService.updateWorkout(workoutId, data);
  }

  @Delete(':id')
  async deleteWorkout(@Param('id') workoutId: number) {
    return this.workoutsService.deleteWorkout(workoutId);
  }
}
