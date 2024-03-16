import { v4 as createV4 } from 'uuid';
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { PiggybankRepository } from './piggybank.repository';

@Entity({ repository: () => PiggybankRepository })
export class Piggybank {
  @PrimaryKey({ type: 'uuid' })
  id = createV4();

  @Property()
  name: string;
}
