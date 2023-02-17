import { Router, type Request, type Response } from "express"

import { asyncHandler } from "../../shared/framework/asyncHandler"
import { CreatePerfilUserController } from "../controllers/perfil/CreatePerfilUserController"
import { ShowProfileController } from "../controllers/perfil/ShowProfileController"

const perfilUserRouter = Router()

perfilUserRouter.post(
  "/perfil",
  asyncHandler(async (req: Request, res: Response) => {
    const createPerfilUserController = new CreatePerfilUserController()

    await createPerfilUserController.run(req, res)
  }),
)

perfilUserRouter.get(
  "/perfil",
  asyncHandler(async (req: Request, res: Response) => {
    const showProfileController = new ShowProfileController()

    await showProfileController.run(req, res)
  }),
)

export { perfilUserRouter }
