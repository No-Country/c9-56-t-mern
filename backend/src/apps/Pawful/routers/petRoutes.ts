import { Router, type Request, type Response } from "express"

import { asyncHandler } from "../../shared/framework/asyncHandler"
import { CreatePetController } from "../controllers/pet/CreatePetController"
import { FindPetsController } from "../controllers/pet/FindPetsController"

const petRouter = Router()

petRouter.get(
  "/pets",
  asyncHandler(async (req: Request, res: Response) => {
    const findPetsController = new FindPetsController()

    await findPetsController.run(req, res)
  }),
)

petRouter.post(
  "/pets",
  asyncHandler(async (req: Request, res: Response) => {
    const createPetController = new CreatePetController()

    await createPetController.run(req, res)
  }),
)

export { petRouter }
