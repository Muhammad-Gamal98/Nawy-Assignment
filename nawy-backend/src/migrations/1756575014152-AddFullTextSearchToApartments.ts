import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFullTextSearchToApartments1710000000000
  implements MigrationInterface
{
  name = 'AddFullTextSearchToApartments1710000000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE apartment ADD COLUMN IF NOT EXISTS search_vector tsvector;
    `);

    await queryRunner.query(`
      UPDATE apartment
      SET search_vector = 
        to_tsvector('english', coalesce("unitName",'') || ' ' || coalesce("unitNumber"::text,'') || ' ' || coalesce(project,''));
    `);

    await queryRunner.query(`
      CREATE INDEX idx_apartment_search ON apartment
      USING GIN (search_vector);
    `);

    await queryRunner.query(`
      CREATE FUNCTION apartment_tsvector_update() RETURNS trigger AS $$
      BEGIN
        NEW.search_vector :=
          to_tsvector('english',
            coalesce(NEW."unitName",'') || ' ' ||
            coalesce(CAST(NEW."unitNumber" AS text),'') || ' ' ||
            coalesce(NEW.project,''));
        RETURN NEW;
      END
      $$ LANGUAGE plpgsql;
    `);

    await queryRunner.query(`
      CREATE TRIGGER apartment_tsvector_update
      BEFORE INSERT OR UPDATE ON apartment
      FOR EACH ROW EXECUTE FUNCTION apartment_tsvector_update();
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP TRIGGER IF EXISTS apartment_tsvector_update ON apartment;`,
    );
    await queryRunner.query(
      `DROP FUNCTION IF EXISTS apartment_tsvector_update;`,
    );
    await queryRunner.query(`DROP INDEX IF EXISTS idx_apartment_search;`);
    await queryRunner.query(`ALTER TABLE apartment DROP COLUMN IF EXISTS search_vector;`);
  }
}
