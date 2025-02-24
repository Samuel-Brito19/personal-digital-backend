import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDTO } from './dto/create-client-dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async findClients() {
    return this.clientService.findClients();
  }

  @Get(':id')
  async findPersonalClients(@Param('id') personalId: number) {
    return this.clientService.findPersonalClients(personalId);
  }

  @Post()
  async createClient(@Body() data: CreateClientDTO) {
    return this.clientService.createClient(data);
  }

  @Put(':id')
  async updateClient(
    @Param(':id') clientId: number,
    @Body() data: CreateClientDTO,
  ) {
    return this.clientService.updateClient(clientId, data);
  }
}
