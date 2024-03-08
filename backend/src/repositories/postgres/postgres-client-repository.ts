import { AppError } from '../../Error/AppError'
import { poolDB } from '../../database'
import { CreateClientProps } from '../../schemas/clientSchema'
import { IClientRepository } from '../clients-repository'

export class ClientRespository implements IClientRepository {
  async create(data: CreateClientProps) {
    try {
      const { rows } = await poolDB.query({
        text: 'INSERT INTO clients (name, email, phone, x, y) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        values: [data.name, data.email, data.phone, data.x, data.y],
      })

      return rows[0]
    } catch (error) {
      throw new AppError('Error on insert', 400)
    }
  }

  async delete(id: string) {
    try {
      const { rows } = await poolDB.query(
        `DELETE FROM clients WHERE id = $1 RETURNING *`,
        [id]
      )

      return rows[0]
    } catch (error) {
      throw new AppError('Error on delete', 400)
    }
  }

  async findAll() {
    try {
      const { rows } = await poolDB.query(`SELECT * FROM clients`)
      return rows
    } catch (error) {
      throw new AppError('Error on insert', 400)
    }
  }

  async findByQuery(q: string) {
    try {
      const { rows } = await poolDB.query(
        `SELECT * FROM clients WHERE name ILIKE $1 OR email ILIKE $1 OR phone ILIKE $1 OR x::text ILIKE $1 OR y::text ILIKE $1`,
        [`%${q}%`]
      )
      return rows
    } catch (error) {
      throw new AppError('Error on findByQuery', 400)
    }
  }
}
