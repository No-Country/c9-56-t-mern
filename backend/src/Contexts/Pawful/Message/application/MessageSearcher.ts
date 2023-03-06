import { MemoryProfileRepository } from "../../Perfil/infrastructure/persistence/memory/MemoryProfileRepository"
import { MongoosePerfilUserRepository } from "../../Perfil/infrastructure/persistence/mongoose/MongooseProfileUserRepository"
import { ParticipantsDoNotExistError } from "../domain/errors/ParticipantsDoNotExistError"
import { MessageWithProfilesModel } from "../domain/models/MessageWithProfiles"
import { MessageRepository } from "../domain/repositories/MessageRepository"

class MessageSearcher {
  constructor(private messageRepository: MessageRepository) {}

  async run(participantId: string): Promise<MessageWithProfilesModel[]> {
    const raw = await this.messageRepository.searchByParticipantId(
      participantId,
    )
    const memoryRepo = new MemoryProfileRepository(
      new MongoosePerfilUserRepository(),
    )
    return await Promise.all(
      raw.map(async (message) => {
        const { id, content, sentAt, senderId, receiverId } = message
        const sender = await memoryRepo.search(senderId)
        const receiver = await memoryRepo.search(receiverId)

        if (!sender || !receiver) {
          throw new ParticipantsDoNotExistError()
        }

        return {
          id,
          content,
          sentAt,
          sender,
          receiver,
        }
      }),
    )
  }
}

export { MessageSearcher }
