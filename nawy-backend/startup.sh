#!/bin/sh
# startup.sh

echo "Starting the application..."
npm run start:prod &   # run app in background

# Wait a bit to ensure DB is up (optional safety)
sleep 5

echo "Checking and running migrations in the background..."
if ! PGPASSWORD=$POSTGRES_PASSWORD psql -h db -U postgres -d nawey -c "SELECT COUNT(*) FROM migrations" > /dev/null 2>&1; then
    echo "Fresh database detected. Running migrations..."
    npm run typeorm -- migration:run -d src/data-source.ts
else
    echo "Existing database detected. Skipping migrations."
fi

# Bring the app process to the foreground so container stays alive
wait -n