import { ClientProps } from '../schemas/clientSchema'
import { ClientRespository } from '../repositories/postgres/postgres-client-repository'

import { nearestNeighborRoute } from '../utils/calculate-faster'

export async function calculateRouteService(q: string) {
  const clientRepository = new ClientRespository()

  const clients: ClientProps[] = await clientRepository.findAll()

  if (q === 'f') {
    const result = nearestNeighborRoute(clients)
    return result
  } else {
    return []
  }
}
