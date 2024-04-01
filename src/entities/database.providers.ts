import { DataSource } from 'typeorm';
import { Guest } from './xtay.guest.entity';

const entities = [Guest]


export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'xtay',
  synchronize: true,
  logging: true,
  entities: entities,
  subscribers: [],
  migrations: [],
})
console.log("foi")