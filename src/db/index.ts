import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import { env } from '@/env/server'

const queryClient = postgres(env.DATABASE_URL)
const db = drizzle({ client: queryClient })

export default db
