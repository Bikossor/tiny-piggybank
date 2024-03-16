import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/CreateUserDto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Post('user')
  async create(@Body('user') userData: CreateUserDto) {
    return this.userService.create(userData);
  }
}
