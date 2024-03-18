import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { Piggybank } from './piggybank.entity';
import { PiggybankRepository } from './piggybank.repository';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PiggybankService {
  constructor(
    private readonly piggybankRepository: PiggybankRepository,
    private readonly userService: UserService,
    private readonly em: EntityManager,
  ) {}

  async getPiggybank(): Promise<Piggybank[]> {
    return this.piggybankRepository.findAll();
  }

  async createPiggybank(name: string, userId: string): Promise<string> {
    const user = await this.userService.getUser(userId);
    const piggybank = new Piggybank(name, user);

    this.em.persist(piggybank);

    await this.em.flush();

    return 'Piggybank created';
  }
}
