import { Types } from "mongoose"
import { Namespace } from "socket.io"
import { MessageCreator } from "../../../../Contexts/Pawful/Message/application/MessageCreator"
import { MessageRepository } from "../../../../Contexts/Pawful/Message/domain/repositories/MessageRepository"
import { Message } from "../../../../Contexts/Pawful/Message/domain/valueObjects/Message"
import { MongooseMessageRepository } from "../../../../Contexts/Pawful/Message/infrastructure/persistence/mongoose/MongooseMessageRepository"
import { PerfilUserRepository } from "../../../../Contexts/Pawful/Perfil/domain/repositories/PerfilUserRepository"
import { MemoryProfileRepository } from "../../../../Contexts/Pawful/Perfil/infrastructure/persistence/memory/MemoryProfileRepository"
import { MongoosePerfilUserRepository } from "../../../../Contexts/Pawful/Perfil/infrastructure/persistence/mongoose/MongooseProfileUserRepository"
import {
  ClientToServerEvents,
  InterServerEvents,
  ServerToClientEvents,
  SocketData,
} from "../../namespaces/chatNamespace"

class MessagesSocketController {
  private readonly messageRepository: MessageRepository
  private readonly messageCreator: MessageCreator

  private readonly fallbackProfileRepository: PerfilUserRepository
  private readonly memoryProfileRepository: MemoryProfileRepository

  constructor() {
    this.messageRepository = new MongooseMessageRepository()
    this.messageCreator = new MessageCreator(this.messageRepository)

    this.fallbackProfileRepository = new MongoosePerfilUserRepository()
    this.memoryProfileRepository = new MemoryProfileRepository(
      this.fallbackProfileRepository,
    )
  }

  async run(
    { content, receiverId }: Pick<Message, "content" | "receiverId">,
    sender: { id: string; name: string; image: string },
    namespace: Namespace<
      ClientToServerEvents,
      ServerToClientEvents,
      InterServerEvents,
      SocketData
    >,
    returnMessage?: boolean,
  ): Promise<void> {
    const id = new Types.ObjectId().toString()
    const sentAt = new Date().toISOString()

    const message = new Message(id, content, sentAt, sender.id, receiverId)

    const receiver = await this.memoryProfileRepository.search(receiverId)
    if (!receiver) {
      console.log("Receiver not found")

      return
    }

    const messageWithProfiles = {
      id,
      content,
      sentAt,
      sender,
      receiver,
    }

    namespace.to(receiverId).emit("message", messageWithProfiles)

    if (returnMessage) {
      namespace.to(sender.id).emit("message", messageWithProfiles)
    }

    await this.messageCreator.run(message)
  }
}

export { MessagesSocketController }
