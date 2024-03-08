import { Request, Response } from 'express'
import { createClientSchema } from '../../schemas/clientSchema'
import { createClientService } from '../../services/createClient-service'

export const createClient = async (request: Request, response: Response) => {
  const { name, email, phone, x, y } = createClientSchema.parse(request.body)

  try {
    const client = await createClientService({ name, email, phone, x, y })

    return response.status(201).json(client)
  } catch (error) {
    throw error
  }
}
