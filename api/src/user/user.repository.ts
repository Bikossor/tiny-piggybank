import { EntityRepository } from '@mikro-orm/sqlite';
import { User } from './user.entity';

export class UserRepository extends EntityRepository<User> {}
