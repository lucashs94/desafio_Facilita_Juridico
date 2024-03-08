import path from 'node:path'
import fs from 'node:fs'
import { poolDB } from '.'
import chalk from 'chalk'

export async function runMigrations() {
  try {
    const migrationsPath = path.join(__dirname, 'migrations')

    const files = fs.readdirSync(migrationsPath)

    for (const file of files) {
      if (file.endsWith('.sql')) {
        const filePath = path.join(migrationsPath, file)

        const sql = fs.readFileSync(filePath, 'utf8')

        await poolDB.query(sql)

        console.log(chalk.green(`✔ Migração ${file} executada com sucesso!`))
      }
    }
  } catch (error) {
    console.error('Erro ao executar as migrações:', error)
  }
}

runMigrations()
