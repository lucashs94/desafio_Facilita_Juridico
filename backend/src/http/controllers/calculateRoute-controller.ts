import { Request, Response } from 'express'
import { calculateRouteService } from '../../services/calculateRoute-service'

export const calculateRoute = async (request: Request, response: Response) => {
  const { q } = request.query

  try {
    const clients = await calculateRouteService(String(q))

    return response.status(200).json(clients)
  } catch (error) {
    throw error
  }
}
