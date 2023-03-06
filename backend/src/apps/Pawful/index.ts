import { createServer } from "node:http"
import { resolve } from "node:path"

import cors from "cors"
import dotenv from "dotenv"
import express, { json, urlencoded } from "express"
import { Server } from "socket.io"

import { connectToDatabase } from "../../config/connectToDatabase"
import { errorHandler } from "../shared/framework/middleware/errorHandler"

import helmet from "helmet"
import { disconnect } from "mongoose"
import { mainRouter } from "./routers"

import swaggerUi from "swagger-ui-express"
import swaggerSetup from "../../docs/swagger"
import { createNamespaces } from "./namespaces"

dotenv.config({ path: resolve(__dirname, "../../../.env") })

const missing = ["PORT", "DB_URI", "JWT_PASS"].filter(
  (env) => !process.env[env],
)

if (missing.length) {
  throw new Error(`Missing environment variables: ${missing.join(", ")}.`)
}

connectToDatabase()

const app = express()

const port = process.env.PORT

app.use(helmet())

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerSetup))
app.use("/api", mainRouter)

app.use(errorHandler)

const httpServer = createServer(app)

const socketIoServer = new Server(httpServer, {
  cors: {
    origin: "*",
  },
})

createNamespaces(socketIoServer)

httpServer.listen(port, () => {
  console.info(`Server running on port ${port}`)
})

const shutdown = () => {
  console.log("Closing http and Socket.io server.")

  socketIoServer.close(() => {
    console.log("Server closed. Closing MongoDB connection.")

    disconnect(() => {
      console.log("MongoDB connection closed.")

      process.exit(0)
    })
  })
}

const signals = ["SIGINT", "SIGTERM"]
signals.forEach((signal) => {
  process.on(signal, shutdown)
})
