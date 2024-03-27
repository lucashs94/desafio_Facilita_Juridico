import { Request, Response } from 'express'
import { findClientSchema } from '../../schemas/clientSchema'
import { findClientService } from '../../services/findClient-service'

export const getClients = async (request: Request, response: Response) => {
  const { q, pageIndex } = findClientSchema.parse(request.query)

  try {
    const clients = await findClientService({ q, pageIndex })

    return response.status(200).json(clients)
  } catch (error) {
    throw error
  }
}
