import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDTO } from './dto/create-client-dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async findClients() {
    return this.clientService.findClients();
  }

  @Get(':name')
  async findClientByName(name: string) {
    return this.clientService.getClientByName(name);
  }

  @Post()
  async createClient(@Body() data: CreateClientDTO) {
    await this.clientService.createClient(data);
  }
}
