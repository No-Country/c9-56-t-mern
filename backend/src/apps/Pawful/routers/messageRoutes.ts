import { Router, type Request, type Response } from "express"

import { asyncHandler } from "../../shared/framework/asyncHandler"
import { FindMessagesController } from "../controllers/message/FindMessagesController"

const messageRouter = Router()

messageRouter.get(
  "/messages",
  asyncHandler(async (req: Request, res: Response) => {
    const findMessagesController = new FindMessagesController()

    await findMessagesController.run(req, res)
  }),
)

export { messageRouter }
