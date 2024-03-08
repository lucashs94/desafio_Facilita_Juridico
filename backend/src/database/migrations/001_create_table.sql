CREATE TABLE IF NOT EXISTS "clients" (
  "id" UUID DEFAULT gen_random_uuid() PRIMARY KEY NOT NULL,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "phone" TEXT NOT NULL,
  "x" NUMERIC(10,6) NOT NULL,
  "y" NUMERIC(10,6) NOT NULL
);