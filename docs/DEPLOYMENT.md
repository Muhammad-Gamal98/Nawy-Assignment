# Deployment Documentation

## Docker Setup

### Docker Compose Configuration

The application uses Docker Compose to orchestrate three services:

1. Database Service (PostgreSQL)
2. Backend Service (NestJS)
3. Frontend Service (Next.js)

### Service Details

#### Database Service

```yaml
db:
  image: postgres:16
  container_name: postgres_db
  volumes:
    - data:/var/lib/postgresql/data
  restart: always
  ports:
    - "5432:5432"
  environment:
    POSTGRES_PASSWORD: "secret"
    POSTGRES_DB: "nawey"
```

#### Backend Service

```yaml
backend:
  build: ./nawy-backend
  ports:
    - "8000:8000"
  environment:
    - DBHOST=db
    - DBPORT=5432
    - DBUSERNAME=postgres
    - POSTGRES_PASSWORD=secret
    - DBNAME=nawey
  depends_on:
    - db
```

#### Frontend Service

```yaml
frontend:
  build: ./nawy-web
  ports:
    - "3000:3000"
  environment:
    - NEXT_PUBLIC_BACKEND_URL=http://backend:8000
  depends_on:
    - backend
```

## Deployment Steps

1. Clone Repository

```bash
git clone https://github.com/Muhammad-Gamal98/Nawy-Assignment.git
cd Nawy-Assignment
```

2. Start Services

```bash
# Build and start all services
docker-compose up --build

# Run in background
docker-compose up -d
```

3. Database Initialization

```bash
# Run migrations
docker-compose exec backend npm run typeorm -- migration:run -d src/data-source.ts
```

## Maintenance

### Viewing Logs

```bash
# All services
docker-compose logs

# Specific service
docker-compose logs backend
docker-compose logs frontend
docker-compose logs db
```

### Restarting Services

```bash
# Restart all
docker-compose restart

# Restart specific
docker-compose restart backend
```

### Updating Application

```bash
# Pull latest code
git pull

# Rebuild and restart
docker-compose down
docker-compose up --build
```

### Database Backup

```bash
# Create backup
docker-compose exec db pg_dump -U postgres nawey > backup.sql

# Restore backup
docker-compose exec -T db psql -U postgres nawey < backup.sql
```

## Troubleshooting

### Common Issues

1. Database Connection Issues

- Check if database container is running
- Verify environment variables
- Check network connectivity

2. Migration Failures

- Check migration files order
- Verify database connection
- Check for existing conflicts

3. Frontend Connection Issues

- Verify NEXT_PUBLIC_BACKEND_URL
- Check if backend is accessible
- Check network settings

### Health Checks

1. Database

```bash
docker-compose exec db psql -U postgres -c '\l'
```

2. Backend

```bash
curl http://localhost:8000/apartment
```

3. Frontend

```bash
curl http://localhost:3000
```
