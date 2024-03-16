import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from 'src/base/base.entity';
import { UserRepository } from './user.repository';

@Entity({ repository: () => UserRepository })
export class User extends BaseEntity {
  @Property()
  name: string;
}
