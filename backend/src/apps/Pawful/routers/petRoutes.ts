import { Router, type Request, type Response } from "express"

import { asyncHandler } from "../../shared/framework/asyncHandler"
import { CreatePetController } from "../controllers/pet/CreatePetController"

const petRouter = Router()

petRouter.post(
  "/pets",
  asyncHandler(async (req: Request, res: Response) => {
    const createPetController = new CreatePetController()

    await createPetController.run(req, res)
  }),
)

export { petRouter }
