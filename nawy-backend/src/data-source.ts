import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DBHOST,
  port: Number(process.env.DBPORT),
  username: process.env.DBUSERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.DBNAME,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
