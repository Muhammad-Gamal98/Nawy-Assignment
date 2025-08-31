# Database Documentation

## Database Schema

### Apartment Entity

| Column        | Type     | Description                           |
| ------------- | -------- | ------------------------------------- |
| id            | number   | Primary key, auto-incremented         |
| unitName      | string   | Name of the apartment unit            |
| unitNumber    | number   | Unique identifier for the unit        |
| project       | string   | Name of the project/development       |
| description   | string   | Detailed description of the apartment |
| image         | string   | URL to the apartment image            |
| price         | number   | Price in EGP                          |
| search_vector | tsvector | PostgreSQL full-text search vector    |

## Full-text Search Implementation

### Search Vector

The search_vector column is automatically updated using a trigger when:

- Inserting new records
- Updating existing records

The search vector includes:

- Unit Name
- Unit Number (converted to text)
- Project Name

### Trigger Function

```sql
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
```

### Search Index

```sql
CREATE INDEX idx_apartment_search ON apartment
USING GIN (search_vector);
```

## Migrations

The project includes two main migrations:

1. AddUnitNumberAndProjectToApartment

   - Adds unitNumber and project columns
   - Makes these fields required

2. AddFullTextSearchToApartments
   - Adds search_vector column
   - Creates trigger function
   - Creates GIN index
   - Sets up automatic vector updates

### Running Migrations

```bash
npm run typeorm -- migration:run -d src/data-source.ts
```

### Creating New Migrations

```bash
npm run typeorm -- migration:create src/migrations/MigrationName
```

## Database Configuration

Environment variables required for database connection:

```env
DBHOST=db
DBPORT=5432
DBUSERNAME=postgres
POSTGRES_PASSWORD=secret
DBNAME=nawey
```
