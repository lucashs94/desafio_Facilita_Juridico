import { string, z } from 'zod'

export const clientSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  x: z.coerce.number(),
  y: z.coerce.number(),
})

export const createClientSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().min(11),
  x: z.coerce.number(),
  y: z.coerce.number(),
})

export const findClientSchema = z.object({
  q: z.string().optional(),
})

export type ClientProps = z.infer<typeof clientSchema>
export type CreateClientProps = z.infer<typeof createClientSchema>
