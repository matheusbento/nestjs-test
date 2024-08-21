import 'dotenv/config';
import { DataSource } from 'typeorm';
import ORMConfig from './ormconfig';

export default new DataSource({ ...ORMConfig });
