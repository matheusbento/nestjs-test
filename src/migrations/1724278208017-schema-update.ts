import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1724278208017 implements MigrationInterface {
    name = 'SchemaUpdate1724278208017'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "stock" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "stock" SET DEFAULT '1'`);
    }

}
