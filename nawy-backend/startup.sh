#!/bin/sh
# startup.sh

# Check if migrations table exists
if ! PGPASSWORD=$POSTGRES_PASSWORD psql -h db -U postgres -d nawey -c "SELECT COUNT(*) FROM migrations" > /dev/null 2>&1; then
    echo "Fresh database detected. Running migrations..."
    npm run typeorm -- migration:run -d src/data-source.ts
else
    echo "Existing database detected. Skipping migrations."
fi

echo "Starting the application..."
npm run start:prod
