import { migrate } from 'drizzle-orm/postgres-js/migrator'

import dbConfig from '@/../drizzle.config'
import { env } from '@/env/server'

import db, { client } from '.'

if (!env.DB_MIGRATING) {
  throw new Error('You must set DB_MIGRATING to true.')
}

await migrate(db, { migrationsFolder: dbConfig.out! })

await client.end()
