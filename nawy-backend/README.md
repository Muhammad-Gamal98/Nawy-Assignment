<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# Nawy Backend

This project is a NestJS backend service for managing apartments, featuring full-text search, pagination, and CRUD operations.

## Features

- Create, read, search, and delete apartments
- Full-text search on unit name, unit number, and project
- Pagination support
- PostgreSQL with TypeORM
- Swagger API documentation

## Endpoints

- `POST /apartment` — Create a new apartment
- `POST /apartment/many` — Create multiple apartments
- `GET /apartment` — List apartments (with pagination)
- `GET /apartment/search?q=...` — Search apartments
- `GET /apartment/:id` — Get apartment by ID
- `DELETE /apartment/:id` — Delete apartment by ID
- `DELETE /apartment` — Delete all apartments

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL
- Docker (optional, for running PostgreSQL)

### Installation

1. Clone the repository
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up your `.env` file with database credentials
4. Run database migrations:
   ```sh
   npx typeorm-ts-node-commonjs migration:run -d src/data-source.ts
   ```
5. Start the server:
   ```sh
   npm run start:dev
   ```

### API Documentation

Visit `/api` or `/swagger` (depending on your setup) for Swagger UI.

## Project Structure

- `src/apartment/entities/apartment.entity.ts` — Apartment entity
- `src/apartment/apartment.repository.ts` — Database logic
- `src/apartment/apartment.service.ts` — Business logic
- `src/apartment/apartment.controller.ts` — API endpoints
- `apartments-static-data.ts` — Example static data for apartments

## Example Apartment Data

The following is example data from `apartments-static-data.ts`:

```json
[
  {
    "unitName": "Sky View",
    "unitNumber": 101,
    "project": "Palm Hills",
    "description": "Modern 2-bedroom apartment with city view.",
    "price": 1500000
  },
  {
    "unitName": "Sky View",
    "unitNumber": 102,
    "project": "Palm Hills",
    "description": "Spacious 3-bedroom apartment with balcony.",
    "price": 1850000
  },
  {
    "unitName": "Cairo Heights",
    "unitNumber": 201,
    "project": "New Cairo",
    "description": "Luxury apartment with garden access.",
    "price": 2100000
  },
  {
    "unitName": "Cairo Heights",
    "unitNumber": 202,
    "project": "New Cairo",
    "description": "Fully furnished 2-bedroom apartment.",
    "price": 1700000
  },
  {
    "unitName": "Palm Gardens",
    "unitNumber": 301,
    "project": "6th October",
    "description": "Family apartment with 3 bedrooms and 2 bathrooms.",
    "price": 1400000
  },
  {
    "unitName": "Palm Gardens",
    "unitNumber": 302,
    "project": "6th October",
    "description": "Compact 1-bedroom apartment ideal for singles.",
    "price": 950000
  },
  {
    "unitName": "Skyline Towers",
    "unitNumber": 401,
    "project": "Nasr City",
    "description": "Luxury penthouse with panoramic skyline views.",
    "price": 3500000
  },
  {
    "unitName": "Skyline Towers",
    "unitNumber": 402,
    "project": "Nasr City",
    "description": "2-bedroom apartment with modern kitchen.",
    "price": 1650000
  },
  {
    "unitName": "Sunny Villas",
    "unitNumber": 501,
    "project": "Sheikh Zayed",
    "description": "Apartment with private garden and parking.",
    "price": 2400000
  },
  {
    "unitName": "Sunny Villas",
    "unitNumber": 502,
    "project": "Sheikh Zayed",
    "description": "Cozy 2-bedroom apartment with large terrace.",
    "price": 1750000
  },
  {
    "unitName": "River Walk",
    "unitNumber": 601,
    "project": "Maadi",
    "description": "Apartment overlooking the Nile river.",
    "price": 3200000
  },
  {
    "unitName": "River Walk",
    "unitNumber": 602,
    "project": "Maadi",
    "description": "3-bedroom luxury apartment with parking.",
    "price": 2800000
  },
  {
    "unitName": "Green Valley",
    "unitNumber": 701,
    "project": "Obour City",
    "description": "Affordable 2-bedroom apartment with green view.",
    "price": 1200000
  },
  {
    "unitName": "Green Valley",
    "unitNumber": 702,
    "project": "Obour City",
    "description": "Family-sized apartment with 4 bedrooms.",
    "price": 2000000
  },
  {
    "unitName": "Sunrise Residence",
    "unitNumber": 801,
    "project": "New Capital",
    "description": "Luxury apartment with rooftop pool access.",
    "price": 4000000
  },
  {
    "unitName": "Sunrise Residence",
    "unitNumber": 802,
    "project": "New Capital",
    "description": "Stylish 1-bedroom apartment with smart home system.",
    "price": 1300000
  },
  {
    "unitName": "Palm Hills",
    "unitNumber": 901,
    "project": "Palm Hills",
    "description": "Modern apartment in Palm Hills community.",
    "price": 2200000
  },
  {
    "unitName": "Palm Hills",
    "unitNumber": 902,
    "project": "Palm Hills",
    "description": "Luxury 2-bedroom apartment with pool view.",
    "price": 2500000
  },
  {
    "unitName": "City Stars",
    "unitNumber": 1001,
    "project": "Heliopolis",
    "description": "Apartment connected to City Stars Mall.",
    "price": 3100000
  },
  {
    "unitName": "City Stars",
    "unitNumber": 1002,
    "project": "Heliopolis",
    "description": "Luxury apartment with private gym access.",
    "price": 3600000
  }
]
```

## License

MIT

```bash
$ npm install
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
