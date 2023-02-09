import type { NextFunction, Request, Response } from "express"

import { BaseError } from "../../../../Contexts/shared/domain/errors/BaseError"
import { HttpCode } from "../../HttpCode"

const errorHandler = (
  err: Error,
  _: Request,
  res: Response,
  __: NextFunction,
): void => {
  if (err instanceof BaseError) {
    res.status(err.httpCode).json({ error: err.message })
    return
  }

  res.status(HttpCode.InternalServerError).json({
    error: "Unknown error",
    name: err.name,
    message: err.message,
    stack: err.stack,
  })
}

export { errorHandler }
