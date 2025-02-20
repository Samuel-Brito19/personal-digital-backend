import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user-dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAllUsers() {
    return this.userService.getAllUsers();
  }

  // @Get()
  // async findUserByName(@Body() name: string) {
  //   return this.userService.findUser(name);
  // }

  @Post()
  async createUser(@Body() request: CreateUserDTO) {
    return this.userService.createUser(request);
  }
}
