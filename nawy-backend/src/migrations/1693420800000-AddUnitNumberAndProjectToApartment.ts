import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUnitNumberAndProjectToApartment1693420800000
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Skip adding columns if they already exist, just update and alter
    await queryRunner.query(
      `UPDATE "apartment" SET "unitNumber" = id WHERE "unitNumber" IS NULL`,
    );
    await queryRunner.query(
      `UPDATE "apartment" SET "project" = '' WHERE "project" IS NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "apartment" ALTER COLUMN "unitNumber" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "apartment" ALTER COLUMN "project" SET NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "unitNumber"`);
    await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "project"`);
  }
}
