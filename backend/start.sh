#!/bin/bash

echo "Aguardando o banco de dados estar pronto..."
until nc -z -v -w30 database 5432; do
  echo "Esperando pelo banco de dados..."
  sleep 5
done
echo "Banco de dados pronto."

chmod +x ./src/database/migrate.ts && \
chmod +x ./src/database/seed.ts && \

npm run migrate && \

npm run seed && \

npm run dev
