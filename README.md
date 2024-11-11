# NestJS Clean Architecture with Prisma and Keycloak

This project demonstrates a Clean Architecture implementation using NestJS, Prisma ORM, and Keycloak for authentication and authorization.

## Prerequisites

- Node.js (v16 or later)
- Docker and Docker Compose
- npm or yarn

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the infrastructure services:
   ```bash
   docker-compose up -d
   ```

3. Configure Keycloak:
   - Access Keycloak Admin Console at http://localhost:8080
   - Login with admin/admin
   - Create a new realm "clean-arch-realm"
   - Create a new client "clean-arch-client"
   - Configure client settings and get the client secret
   - Create roles: "admin" and "user"

4. Set up the environment:
   - Copy .env.example to .env
   - Update the environment variables with your configurations

5. Initialize the database:
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```

6. Start the application:
   ```bash
   npm run start:dev
   ```

The API will be available at http://localhost:3000
Swagger documentation can be accessed at http://localhost:3000/api

## Project Structure

```
src/
├── domain/           # Enterprise business rules
│   ├── entities/
│   └── repositories/
├── application/      # Application business rules
│   ├── dtos/
│   └── services/
├── infrastructure/   # Frameworks and tools
│   ├── persistence/
│   └── auth/
└── presentation/    # Interface adapters
    └── controllers/
```

## Features

- Clean Architecture implementation
- Prisma ORM with PostgreSQL
- Keycloak integration for authentication
- Role-based access control
- Swagger documentation
- Docker setup for development
- Environment configuration
- Type safety with TypeScript