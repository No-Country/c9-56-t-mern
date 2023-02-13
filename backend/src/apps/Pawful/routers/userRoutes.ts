import { Router, type Request, type Response } from "express"

import { asyncHandler } from "../../shared/framework/asyncHandler"
import { CreateUserController } from "../controllers/user/CreateUserController"
import { ShowUserController } from "../controllers/user/ShowUserController"
import { UpdateUserController } from "../controllers/user/UpdateUserController"

const userRouter = Router()

userRouter.get(
  "/users/:id",
  asyncHandler(async (req: Request, res: Response) => {
    const showUserController = new ShowUserController()

    await showUserController.run(req, res)
  }),
)

userRouter.post(
  "/users",
  asyncHandler(async (req: Request, res: Response) => {
    const createUserController = new CreateUserController()

    await createUserController.run(req, res)
  }),
)

userRouter.put(
  "/users/:id",
  asyncHandler(async (req: Request, res: Response) => {
    const updateUserController = new UpdateUserController()

    await updateUserController.run(req, res)
  }),
)

export { userRouter }
