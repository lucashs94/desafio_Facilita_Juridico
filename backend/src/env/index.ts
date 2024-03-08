import { config } from 'dotenv'
import { z } from 'zod'

if (process.env.NODE_ENV === 'development') {
  config({ path: '.env.local' })
} else {
  config()
}

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('production'),
  DATABASE_URL: z.string(),
  PORT: z.coerce.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid env variables!', _env.error.format())

  throw new Error('Invalid env variables!')
}

export const env = _env.data
