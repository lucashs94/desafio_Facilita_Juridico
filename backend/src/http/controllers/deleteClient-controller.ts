import { Request, Response } from 'express'
import { deleteClientService } from '../../services/deleteClient-service'

export const deleteClient = async (request: Request, response: Response) => {
  const { id } = request.params

  try {
    const clients = await deleteClientService(id)

    return response.status(200).json(clients)
  } catch (error) {
    throw error
  }
}
