# Nawy Assignment Project

A full-stack application for managing apartment listings with search capabilities and full CRUD operations.

## Project Structure

```
nawy/
├── nawy-backend/         # NestJS Backend
├── nawy-web/            # Next.js Frontend
└── docker-compose.yml   # Docker configuration
```

## Tech Stack

### Backend (nawy-backend)
- NestJS
- TypeORM
- PostgreSQL
- Full-text Search
- Docker

### Frontend (nawy-web)
- Next.js 15.5
- TypeScript
- Tailwind CSS
- Material-UI Components
- React Icons

## Features

- 🏠 Apartment Listings Management
- 🔍 Full-text Search Capabilities
- 📱 Responsive Design
- ⚡ Real-time Updates
- 🔄 CRUD Operations
- 📊 Pagination Support

## Getting Started

### Prerequisites
- Docker and Docker Compose
- Node.js (for local development)

### Running with Docker

1. Clone the repository:
```bash
git clone https://github.com/Muhammad-Gamal98/Nawy-Assignment.git
cd Nawy-Assignment
```

2. Start the application:
```bash
docker-compose up --build
```

This will start:
- PostgreSQL database on port 5432
- Backend service on port 8000
- Frontend service on port 3000

### API Endpoints

#### Apartments
- `GET /apartment` - List all apartments (with pagination)
- `GET /apartment/:id` - Get specific apartment details
- `GET /apartment/search` - Search apartments
- `POST /apartment` - Create new apartment
- `POST /apartment/many` - Create multiple apartments
- `DELETE /apartment/:id` - Delete specific apartment
- `DELETE /apartment` - Delete all apartments

### Environment Variables

#### Backend (.env)
```env
DBHOST=db
DBPORT=5432
DBUSERNAME=postgres
POSTGRES_PASSWORD=secret
DBNAME=nawey
```

#### Frontend (.env)
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

## Database Schema

### Apartment Entity
- id: number
- unitName: string
- unitNumber: number
- project: string
- description: string
- image: string
- price: number
- search_vector: tsvector (for full-text search)

## Features in Detail

### Full-text Search
- Implemented using PostgreSQL's tsvector
- Searches across unit name, unit number, and project fields
- Automatically updates search vectors on insert/update

### Frontend Features
- Responsive design for all screen sizes
- Real-time search functionality
- Image preview for apartments
- User-friendly forms for adding/editing apartments
- Toast notifications for user feedback
- Loading states and error handling

### Backend Features
- RESTful API architecture
- Database migrations for version control
- Environment configuration
- Error handling and validation
- Swagger API documentation

## Development

### Local Development Setup

1. Backend:
```bash
cd nawy-backend
npm install
npm run start:dev
```

2. Frontend:
```bash
cd nawy-web
npm install
npm run dev
```

### Database Migrations
```bash
# Run migrations
npm run typeorm -- migration:run -d src/data-source.ts

# Create new migration
npm run typeorm -- migration:create src/migrations/MigrationName
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.
