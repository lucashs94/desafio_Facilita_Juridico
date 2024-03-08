import { ClientRespository } from '../repositories/postgres/postgres-client-repository'
import { ClientProps, CreateClientProps } from '../schemas/clientSchema'

export async function createClientService({
  name,
  email,
  phone,
  x,
  y,
}: CreateClientProps) {
  const clientRepository = new ClientRespository()

  const client: ClientProps = await clientRepository.create({
    name,
    email,
    phone,
    x,
    y,
  })

  return client
}
