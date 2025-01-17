# Next.js Starter Template

This is a starter template for building production-grade applications using Next.js.

## Features

- Linting / Code Style
- Environment Variables
- Styles / UI
- Validation
- Forms
- Database
- Authentication

## Tech Stack

TBD

## Getting Started

```bash
git clone https://github.com/nicksp/next-starter-template
cd next-starter-template

# Install dependencies
pnpm install

# Create the .env file
cp .env.example .env

# Start the database service
docker compose up

# Migrate the database
pnpm db:migrate
```

## Running Locally

First, run the Next.js development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Resources

- [Bulletproof React](https://github.com/alan2207/bulletproof-react)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
