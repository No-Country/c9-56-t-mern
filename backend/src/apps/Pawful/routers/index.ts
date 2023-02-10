import { Router } from "express"

import { userRouter } from "./userRoutes"
import { authRouter } from "./authRoutes"
import {categoryRouter } from "./categoryRoutes"

const mainRouter = Router()

mainRouter.use(authRouter)
mainRouter.use(userRouter)
mainRouter.use(categoryRouter)

export { mainRouter }
