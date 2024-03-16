import { PrimaryKey, Property } from '@mikro-orm/core';
import { v4 as createV4 } from 'uuid';

export abstract class BaseEntity {
  @PrimaryKey({ type: 'uuid' })
  id = createV4();

  @Property({ type: 'date' })
  createdAt = new Date();

  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();
}
