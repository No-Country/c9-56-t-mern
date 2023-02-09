import { Router } from "express"

import { userRouter } from "./userRoutes"
import { authRouter } from "./authRoutes"

const mainRouter = Router()

mainRouter.use(authRouter)
mainRouter.use(userRouter)

export { mainRouter }
