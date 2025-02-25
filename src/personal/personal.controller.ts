import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PersonalService } from './personal.service';
import { CreatePersonalDTO } from './dto/create-personal-dto';

@Controller('personal')
export class PersonalController {
  constructor(private readonly personalService: PersonalService) {}

  @Get()
  async findPersonals() {
    return this.personalService.getPersonals();
  }

  @Post()
  async createPersonal(@Body() request: CreatePersonalDTO) {
    return this.personalService.createPersonal(request);
  }

  @Get(':name')
  async getPersonalByName(name: string) {
    return this.personalService.getPersonalByName(name);
  }

  @Put(':id')
  async updatePersonal(
    @Param(':id') personalId: number,
    @Body() data: CreatePersonalDTO,
  ) {
    return this.personalService.updatePersonal(personalId, data);
  }

  @Delete(':id')
  async deletePersonal(@Param('id') personalId: number) {
    return this.personalService.deletePersonal(personalId);
  }
}
