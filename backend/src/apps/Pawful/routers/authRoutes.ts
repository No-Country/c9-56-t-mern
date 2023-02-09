import { Router, type Request, type Response } from "express"

import { asyncHandler } from "../../shared/framework/asyncHandler"
import { CreateLogController } from "../controllers/auth/CreateSessionController"

const authRouter = Router()

authRouter.post(
  "/auth/login",
  asyncHandler(async (req: Request, res: Response) => {
    const createLogController = new CreateLogController()

    await createLogController.run(req, res)
  }),
)

export { authRouter }
