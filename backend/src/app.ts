import 'express-async-errors'

import express from 'express'
import cors from 'cors'

import { router } from './http/routes'
import { ErrorHandler } from './Error/ErrorHandling'

export const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: '*',
  })
)

app.use(router)

app.use(ErrorHandler)
