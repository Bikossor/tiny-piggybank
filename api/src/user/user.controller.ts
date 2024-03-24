import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/CreateUserDto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Get a user by id',
  })
  @Get('user/:id')
  async getUser(@Param() params: { id: string }): Promise<User> {
    return this.userService.findById(params.id);
  }

  @ApiOperation({
    summary: 'Create a user',
  })
  @Post('user')
  async create(@Body('user') userData: CreateUserDto) {
    return this.userService.create(userData);
  }
}
