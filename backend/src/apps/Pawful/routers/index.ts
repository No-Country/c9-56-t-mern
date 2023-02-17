import { Router } from "express"
import { tokenValidator } from "../../shared/framework/middleware/tokenValidator"

import { authRouter } from "./authRoutes"
import { categoryRouter } from "./categoryRoutes"
import { userRouter } from "./userRoutes"
import { perfilUserRouter } from "./profileRoutes"
import { serviceRouter } from "./serviceRoutes"

const mainRouter = Router()

mainRouter.use(authRouter)
mainRouter.use(tokenValidator)
mainRouter.use(userRouter)
mainRouter.use(perfilUserRouter)
mainRouter.use(categoryRouter)
mainRouter.use(serviceRouter)

export { mainRouter }
