import { Router } from "express"
import { tokenValidator } from "../../shared/framework/middleware/tokenValidator"

import { authRouter } from "./authRoutes"
import { categoryRouter } from "./categoryRoutes"
import { messageRouter } from "./messageRoutes"
import { petRouter } from "./petRoutes"
import { perfilUserRouter } from "./profileRoutes"
import { serviceRouter } from "./serviceRoutes"
import { userRouter } from "./userRoutes"

const mainRouter = Router()

mainRouter.use(authRouter)
mainRouter.use(tokenValidator)
mainRouter.use(userRouter)
mainRouter.use(perfilUserRouter)
mainRouter.use(categoryRouter)
mainRouter.use(serviceRouter)
mainRouter.use(petRouter)
mainRouter.use(messageRouter)

export { mainRouter }
