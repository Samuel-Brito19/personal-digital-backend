import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user-dto';
import { Public } from 'src/auth/decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Get()
  async findAllUsers() {
    return this.userService.getAllUsers();
  }
  @Public()
  @Get(':name')
  async findUserByName(@Param('name') name: string) {
    return this.userService.findUser(name);
  }
  @Public()
  @Post()
  async createUser(@Body() request: CreateUserDTO) {
    return this.userService.createUser(request);
  }
}
