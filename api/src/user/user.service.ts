import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/CreateUserDto';
import { IUserRO } from './user.interface';
import { hash as hashArgon2 } from 'argon2';

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

  async getUser(id: string): Promise<User> {
    return this.userRepository.findOneOrFail({ id });
  }

  async findByName(name: string): Promise<User> {
    return this.userRepository.findOneOrFail({ name });
  }

  async create(dto: CreateUserDto): Promise<IUserRO> {
    const { name, password } = dto;
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

    const hashedPassword = await hashArgon2(password);

    // create new user
    const user = new User(name, hashedPassword);

    await this.em.persistAndFlush(user);
    return this.buildUserRO(user);
  }
}
