import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/CreateUserDto';
import { IUserRO } from './user.interface';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly em: EntityManager,
  ) {}

  private buildUserRO(user: User): IUserRO {
    const userRO: IUserRO = {
      user: {
        name: user.name,
      },
    };

    return userRO;
  }

  async getUser(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async create(dto: CreateUserDto): Promise<IUserRO> {
    const { name } = dto;
    // check uniqueness of name
    const exists = await this.userRepository.count({
      $or: [{ name }],
    });

    if (exists > 0) {
      throw new HttpException(
        {
          message: 'Input data validation failed',
          errors: { name: 'Name must be unique.' },
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    // create new user
    const user = new User(name);

    await this.em.persistAndFlush(user);
    return this.buildUserRO(user);
  }
}
