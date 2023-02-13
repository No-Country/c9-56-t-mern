import { Router, type Request, type Response } from "express"

import { asyncHandler } from "../../shared/framework/asyncHandler"
import { CreatePerfilUserController } from "../controllers/perfil/CreatePerfilUserController"


const perfilUserRouter = Router()

perfilUserRouter.post(
  "/perfil",
  asyncHandler(async (req: Request, res: Response) => {
    const createPerfilUserController = new CreatePerfilUserController()

    await createPerfilUserController.run(req, res)
  }),
)

export { perfilUserRouter }
