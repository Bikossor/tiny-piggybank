import { EntityRepository } from '@mikro-orm/sqlite';
import { Piggybank } from './piggybank.entity';

export class PiggybankRepository extends EntityRepository<Piggybank> {}
