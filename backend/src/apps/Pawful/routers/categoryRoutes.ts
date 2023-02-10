import { Router, type Request, type Response } from "express"

import { asyncHandler } from "../../shared/framework/asyncHandler"
import { CategorySearchOneController } from "../controllers/category/categorySearchOneController"

const categoryRouter = Router()

categoryRouter.get(
  "/categories/:id",
  asyncHandler(async (req: Request, res: Response) => {
    const categorySearchOneController = new CategorySearchOneController()

    await categorySearchOneController.run(req, res)
  }),
)

export { categoryRouter }
