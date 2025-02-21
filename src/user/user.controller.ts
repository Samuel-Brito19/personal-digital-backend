import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user-dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':name')
  async findUserByName(@Param('name') name: string) {
    return this.userService.findUser(name);
  }

  @Post()
  async createUser(@Body() request: CreateUserDTO) {
    return this.userService.createUser(request);
  }
}
