import { ClientRespository } from '../repositories/postgres/postgres-client-repository'
import { ClientProps, CreateClientProps } from '../schemas/clientSchema'

export async function findClientService(q: string | undefined) {
  const clientRepository = new ClientRespository()

  if (q) {
    const clients: ClientProps[] = await clientRepository.findByQuery(q)

    return clients
  } else {
    const clients: ClientProps[] = await clientRepository.findAll()

    return clients
  }
}
