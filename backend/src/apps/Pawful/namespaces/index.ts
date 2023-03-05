import { Server } from "socket.io"
import { createChatNamespace } from "./chatNamespace"

const createNamespaces = (socketIoServer: Server) => {
  createChatNamespace(socketIoServer)
}

export { createNamespaces }
