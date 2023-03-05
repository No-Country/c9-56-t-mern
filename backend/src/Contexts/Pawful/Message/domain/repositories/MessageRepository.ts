import { Message } from "../valueObjects/Message"

interface MessageRepository {
  save(message: Message): Promise<Message>
  searchByParticipantId(participantId: string): Promise<Message[]>
}

export { type MessageRepository }
