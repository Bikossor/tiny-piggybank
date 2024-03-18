import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { BaseEntity } from 'src/base/base.entity';
import { PiggybankRepository } from './piggybank.repository';
import { User } from 'src/user/user.entity';

@Entity({ repository: () => PiggybankRepository })
export class Piggybank extends BaseEntity {
  @Property()
  name: string;

  @ManyToOne()
  owner: User;

  @Property()
  balance: number;

  constructor(name: string, owner: User) {
    super();
    this.name = name;
    this.owner = owner;
    this.balance = 0;
  }
}
