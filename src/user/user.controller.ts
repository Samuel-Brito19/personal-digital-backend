import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Put(':id')
  async updateUser(
    @Param('id') userId: number,
    @Body() request: CreateUserDTO,
  ) {
    return this.userService.updateUser(userId, request);
  }

  @Delete(':id')
  async deleteUser(@Param('id') userId: number) {
    return this.userService.deleteUser(userId);
  }
}
