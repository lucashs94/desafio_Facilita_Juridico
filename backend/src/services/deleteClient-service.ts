import { ClientRespository } from '../repositories/postgres/postgres-client-repository'
import { ClientProps, CreateClientProps } from '../schemas/clientSchema'

export async function deleteClientService(id: string | undefined) {
  const clientRepository = new ClientRespository()

  if (id) {
    const clients: ClientProps[] = await clientRepository.delete(id)

    return clients
  }
}
