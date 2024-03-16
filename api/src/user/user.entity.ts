import { Collection, Entity, OneToMany, Property } from '@mikro-orm/core';
import { BaseEntity } from 'src/base/base.entity';
import { UserRepository } from './user.repository';
import { Piggybank } from 'src/piggybank/piggybank.entity';

@Entity({ repository: () => UserRepository })
export class User extends BaseEntity {
  @Property()
  name: string;

  @OneToMany('Piggybank', 'owner')
  piggybanks = new Collection<Piggybank>(this);

  constructor(name: string) {
    super();
    this.name = name;
  }
}
