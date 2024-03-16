import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/CreateUserDto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user')
  async getUser(): Promise<User[]> {
    return this.userService.getUser();
  }

  @Post('user')
  async create(@Body('user') userData: CreateUserDto) {
    return this.userService.create(userData);
  }
}
