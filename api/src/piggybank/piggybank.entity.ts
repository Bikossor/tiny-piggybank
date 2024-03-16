import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from 'src/base/base.entity';
import { PiggybankRepository } from './piggybank.repository';

@Entity({ repository: () => PiggybankRepository })
export class Piggybank extends BaseEntity {
  @Property()
  name: string;
}
