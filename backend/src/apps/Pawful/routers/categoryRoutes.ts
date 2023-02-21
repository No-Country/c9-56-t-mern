import { Router, type Request, type Response } from "express"
import { asyncHandler } from "../../shared/framework/asyncHandler"
import { CreateCategoryController } from "../controllers/category/CreateCategoryController"
import { CategorySearchOneController } from "../controllers/category/categorySearchOneController"
import { CategorySearchAllController } from "../controllers/category/categorySeachAllController"
import { DeleteCategoryController } from "../controllers/category/DeleteCategoryController"

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

categoryRouter.get(
  "/categories",
  asyncHandler(async (req: Request, res: Response) => {
    const categorySearchAllController = new CategorySearchAllController()
    await categorySearchAllController.run(req, res)
  }),
)

categoryRouter.delete(
  "/categories/:id",
  asyncHandler(async (req: Request, res: Response) => {
    const deleteCategoryController = new DeleteCategoryController()
    await deleteCategoryController.run(req, res)
  }),
)

export { categoryRouter }
