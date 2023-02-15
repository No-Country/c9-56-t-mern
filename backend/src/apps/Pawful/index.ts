import { resolve } from "node:path"

import cors from "cors"
import dotenv from "dotenv"
import express, { json, urlencoded } from "express"

import { connectToDatabase } from "../../config/connectToDatabase"
import { errorHandler } from "../shared/framework/middleware/errorHandler"

import helmet from "helmet"
import { mainRouter } from "./routers"

import swaggerUi from "swagger-ui-express";
import swaggerSetup from '../../docs/swagger';

dotenv.config({ path: resolve(__dirname, "../../../.env") })

connectToDatabase()

const app = express()

const port = process.env.PORT

app.use(helmet())

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerSetup));
app.use("/api", mainRouter)

app.use(errorHandler)

app.listen(port, () => {
  console.info(`server run on port http://localhost:${port}/api`)
})
