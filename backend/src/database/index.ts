import { Pool, PoolClient } from 'pg'
import { env } from '../env'
import { parse } from 'pg-connection-string'

const connectionString = env.DATABASE_URL

export const poolDB = new Pool({
  connectionString: connectionString,
})
