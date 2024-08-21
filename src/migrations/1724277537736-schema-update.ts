import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaUpdate1724277537736 implements MigrationInterface {
  name = 'SchemaUpdate1724277537736';

  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration SchemaUpdate1724277537736');
    await queryRunner.query(`ALTER TABLE "product" ADD "stock" integer`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "stock"`);
  }
}
