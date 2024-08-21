export type IORMConfig = {
  type: 'postgres' | 'mysql' | 'sqlite';
  port: string;
  host: string;
  user: string;
  password: string;
  database: string;
};
