import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { Piggybank } from './piggybank.entity';
import { PiggybankRepository } from './piggybank.repository';

@Injectable()
export class PiggybankService {
  constructor(
    private readonly piggybankRepository: PiggybankRepository,
    private readonly em: EntityManager,
  ) {}

  async getPiggybank(): Promise<Piggybank[]> {
    return this.piggybankRepository.findAll();
  }
}
