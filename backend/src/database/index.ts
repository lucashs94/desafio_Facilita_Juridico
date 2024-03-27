import { Pool, PoolClient } from 'pg'
import { env } from '../env'

const connectionString = env.DATABASE_URL

export const poolDB = new Pool({
  connectionString: connectionString,
})
