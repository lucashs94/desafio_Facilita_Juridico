import { Sex, fakerPT_BR } from '@faker-js/faker'
import { poolDB } from '.'
import chalk from 'chalk'

const generateFakeDataArray = () => {
  return {
    name: fakerPT_BR.person.fullName({ sex: 'male' }),
    email: fakerPT_BR.internet.email(),
    phone: String(fakerPT_BR.phone.number()),
    x: fakerPT_BR.location.latitude({ precision: 6 }),
    y: fakerPT_BR.location.latitude({ precision: 6 }),
  }
}

const deleteAllFromClients = async () => {
  try {
    await poolDB.query(`
      DO $$
        BEGIN
            IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'clients') THEN
              DELETE FROM clients;
            END IF;
      END $$;
    `)
    console.log(chalk.red('✔ Table clients cleaned'))
  } catch (error) {
    console.log(chalk.red('Error on delete table clients lines'))
  }
}

const seedDatabase = async (numberOfEntries: number): Promise<void> => {
  await deleteAllFromClients()

  try {
    for (let i = 0; i < numberOfEntries; i++) {
      const fake = generateFakeDataArray()

      const query = `INSERT INTO clients (name, email, phone, x, y) VALUES ($1, $2, $3, $4, $5)`

      await poolDB.query(query, [
        fake.name,
        fake.email,
        fake.phone,
        fake.x,
        fake.y,
      ])
    }
    console.log(chalk.green('✔ Created clients'))
  } catch (error) {
    console.error('Erro ao semear o banco de dados:', error)
  }
}

seedDatabase(10)
