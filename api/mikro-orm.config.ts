import { defineConfig } from '@mikro-orm/sqlite';

export default defineConfig({
  dbName: 'tiny-piggybank.sqlite3',
  entities: ['./dist/entities'],
  entitiesTs: ['./src/entities'],
});
