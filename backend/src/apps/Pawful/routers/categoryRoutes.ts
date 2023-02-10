import { Router, type Request, type Response } from "express"
import { asyncHandler } from "../../shared/framework/asyncHandler"
import { CreateCategoryController } from "../controllers/category/CreateCategoryController"
import { CategorySearchOneController } from "../controllers/category/categorySearchOneController"

const categoryRouter = Router()

categoryRouter.post(
  "/categories",
  asyncHandler(async (req: Request, res: Response) => {
    const createCategoryController = new CreateCategoryController()
    await createCategoryController.run(req, res)
  }),
)

categoryRouter.get(
  "/categories/:id",
  asyncHandler(async (req: Request, res: Response) => {
    const categorySearchOneController = new CategorySearchOneController()

    await categorySearchOneController.run(req, res)
  }),
)

export { categoryRouter }
