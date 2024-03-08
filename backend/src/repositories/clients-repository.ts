import { ClientProps, CreateClientProps } from '../schemas/clientSchema'

export interface IClientRepository {
  create(data: CreateClientProps): Promise<ClientProps | null>
  delete(id: string): Promise<ClientProps | null>
  findAll(): Promise<ClientProps[] | null>
  findByQuery(q: string): Promise<ClientProps[] | null>
}
