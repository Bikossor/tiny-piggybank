import { Migrator } from '@mikro-orm/migrations';
import { SqliteDriver, defineConfig } from '@mikro-orm/sqlite';

export default defineConfig({
  driver: SqliteDriver,
  dbName: 'tiny-piggybank.sqlite3',
  entities: ['./dist/**/*.entity.js'],
  entitiesTs: ['./src/**/*.entity.ts'],
  extensions: [Migrator],
});
