import { Request, Response, NextFunction } from 'express'
import { env } from '../env'
import { ZodError } from 'zod'
import { AppError } from './AppError'

export function ErrorHandler(
  err: Error,
  _: Request,
  res: Response,
  __: NextFunction
) {
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      status: 400,
      message: 'Validation error!',
      issues: env.NODE_ENV !== 'production' ? err.format() : {},
    })
  }

  if (err instanceof AppError) {
    return res.status(err.status).json({
      success: false,
      status: err.status,
      message: err.message,
      issues: env.NODE_ENV !== 'production' ? err.stack : {},
    })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(err)
  }

  return res.status(500).json({
    success: false,
    status: 500,
    message: 'Internal server error.',
    issues: env.NODE_ENV !== 'production' ? err.stack : {},
  })
}
