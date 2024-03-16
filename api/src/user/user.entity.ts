import { v4 as createV4 } from 'uuid';
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { UserRepository } from './user.repository';

@Entity({ repository: () => UserRepository })
export class User {
  @PrimaryKey({ type: 'uuid' })
  id = createV4();

  @Property()
  name: string;
}
