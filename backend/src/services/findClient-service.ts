import { ClientRespository } from '../repositories/postgres/postgres-client-repository'
import { ClientProps, CreateClientProps } from '../schemas/clientSchema'

interface findClientsProps {
  q: string | undefined
  pageIndex: number | undefined
}

export async function findClientService({ q, pageIndex }: findClientsProps) {
  const clientRepository = new ClientRespository()

  if (q) {
    const clients: ClientProps[] = await clientRepository.findByQuery(
      q,
      pageIndex
    )

    return clients
  } else {
    const clients: ClientProps[] = await clientRepository.findAll(pageIndex)

    return clients
  }
}
