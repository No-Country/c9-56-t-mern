import { Router, type Request, type Response } from "express"

import { asyncHandler } from "../../shared/framework/asyncHandler"
import { CreateServiceController } from "../controllers/service/CreateServiceController"
import { ShowServiceController } from "../controllers/service/ShowServiceController"

const serviceRouter = Router()

serviceRouter.post(
  "/services",
  asyncHandler(async (req: Request, res: Response) => {
    const createServiceController = new CreateServiceController()

    await createServiceController.run(req, res)
  }),
)

serviceRouter.get(
  "/services/:id",
  asyncHandler(async (req: Request, res: Response) => {
    const showServiceController = new ShowServiceController()

    await showServiceController.run(req, res)
  }),
)

export { serviceRouter }