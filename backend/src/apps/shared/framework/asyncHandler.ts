import type { NextFunction, Request, Response } from "express"

const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await Promise.resolve(fn(req, res, next))
    } catch (error) {
      next(error)
    }
  }

export { asyncHandler }
