import { Namespace, Server } from "socket.io"
import { Message } from "../../../Contexts/Pawful/Message/domain/valueObjects/Message"
import { MissingFieldsError } from "../../../Contexts/shared/domain/errors/MissingFieldsError"
import { MessagesSocketController } from "../controllers/message/MessagesSocketController"

interface ClientToServerEvents {
  message: (
    message: Pick<Message, "content" | "receiverId">,
    returnMessage?: boolean,
  ) => void
}
interface ServerToClientEvents {
  message: (
    message: Pick<Message, "id" | "content" | "sentAt"> & {
      sender: { id: string; name: string; image: string }
      receiver: { id: string; name: string; image: string }
    },
  ) => void
}

interface InterServerEvents {}

interface SocketData {
  sender: {
    id: string
    name: string
    image: string
  }
}

const createChatNamespace = (socketIoServer: Server) => {
  const chatNamespace: Namespace<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
  > = socketIoServer.of("/api/chat")

  chatNamespace.use((socket, next) => {
    console.log("New connection to chat namespace")
    const { id, name, image } = socket.handshake.query

    if (
      typeof id !== "string" ||
      typeof name !== "string" ||
      typeof image !== "string"
    ) {
      return next(new MissingFieldsError())
    }

    socket.data.sender = { id, name, image }
    next()
  })

  chatNamespace.on("connection", (socket) => {
    socket.join(socket.data.sender!.id)

    socket.on("message", (message, returnMessage) => {
      const messagesSocketController = new MessagesSocketController()
      if (typeof message === "string") {
        message = JSON.parse(message)
      }

      messagesSocketController.run(
        message,
        socket.data.sender!,
        chatNamespace,
        returnMessage,
      )
    })
  })
}

export {
  createChatNamespace,
  type ServerToClientEvents,
  type ClientToServerEvents,
  type InterServerEvents,
  type SocketData,
}
