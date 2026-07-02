# The Prisma Ecosystem

## Prisma Client

- Main tool we use
- Auto-generated, type-safe query builder
- Use it to CRUD
- Generated from your schema and knows your DB structure

## Prisma Migrate

- Habndles database schema changes
- Creates migration files to track changes
- Like Git for your database

## Prisma Studio

- GUI in your browser
- Button clicks for major operations
- Like phpmyadmin but without any sql query

## Prisma Accelerate

- Global database cache and connection pooler
- In production db store is in cloud, so queries take longer time for the user
- Prisma accelerate makes queries faster by caching results at the edge(close to your users)
- Essential for serverless apps where connection management is tricky

## When we should use Prisma?

- Nodejs or typescript specific app
- Type-safety and autocomplete
- Beginner without SQL advance knowledge
- Next.js, Remix or NestJS
- Visual tool needed
- Serverless platform deployment

## When not to use Prisma?

- legacy db; migration not possible
- Not JS or TS used
- Prefer writing RAW sql and want full control

## Threee CORE Prisma Tools:

## Prisma Schema:

- Single, human-readable schema file
- `Data models` are defined here, `relationships`, and `db connections`
- Single source of truth for entire data layer of an application
- `schema.prisma` file

```typescript
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

datasource db {
  provider = "postgresql"
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
```

## Prisma Migrate

- Auto generate and apply SQL migration files
- Handles schema changes
- DB sync with code
- `auto-migrations`, `version control`,`Safe Rollbacks`

## Prisma Client

- `Auto-generated` `type-safe` query builder for schema
- `Intellisense` for code editors
- Full typescript support right out of the box

## Common Prisma Terminologies

**Model**:

- Representation for DB table

**Schema**:

- The `schema.prisma` file
- Define models, data sources, and generators

**Migration**:

- A file recording DB structure changes

**Relation**

- Connection between models

**Client**

- The Auto-generated Library we import
- Used for running queries
- fully-typed and knows current DB schema

**Generator**:

- Section in schema telling Prisma what to generate.

**DataSource**:

- Tells prisma which DB to connect to and its type
- MySQL, PostgreSQL or MongoDB

**Seeding**:

- Filling DB with initial test data
- Full prisma support to generate test data

## Prisma Workflow:

```text
Define Schema → Run Migrate → Generate Client → Write Queries → Iterate → (back to Define Schema)
```
