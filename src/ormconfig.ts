import { DataSourceOptions } from 'typeorm';
import { IORMConfig } from './common/interfaces/IORMConfig';
import { Product } from './products/entities/product.entity';
import { join } from 'path';

const config: IORMConfig = {
  type: process.env?.DB_TYPE as 'postgres' | 'mysql' | 'sqlite',
  port: process.env?.DB_PORT,
  host: process.env?.DB_HOST,
  user: process.env?.DB_USER,
  password: process.env?.DB_PASSWORD,
  database: process.env?.DB_DATABASE,
};

const ORMConfig: DataSourceOptions = {
  type: config.type,
  host: config.host,
  port: +config.port,
  username: config.user,
  password: config.password,
  database: config.database,
  // We are using migrations, synchronize should be set to false.
  synchronize: false,
  dropSchema: false,
  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: false,
  logging: ['warn', 'error'],
  logger: 'debug',
  entities: [Product],
  migrations: [join(__dirname, 'migrations/*{.ts,.js}')],
  subscribers: [join(__dirname, 'subscribers/*{.ts,.js}')],
};

export default ORMConfig;
