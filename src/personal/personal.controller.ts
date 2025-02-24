import { Body, Controller, Get, Post } from '@nestjs/common';
import { Public } from 'src/auth/decorator';
import { PersonalService } from './personal.service';
import { CreatePersonalDTO } from './dto/create-personal-dto';

@Controller('personal')
export class PersonalController {
  constructor(private readonly personalService: PersonalService) {}

  @Get()
  async getPersonals() {
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
}
