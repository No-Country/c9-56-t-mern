import { MessageRepository } from "../../../domain/repositories/MessageRepository"
import { Message } from "../../../domain/valueObjects/Message"
import { MongooseMessageModel } from "./MongooseMessageModel"

class MongooseMessageRepository implements MessageRepository {
  async save(message: Message): Promise<Message> {
    const newMessage = new MongooseMessageModel(message)
    const savedMessage: Message = await newMessage.save()

    const { id, content, sentAt, senderId, receiverId } = savedMessage

    return new Message(id, content, sentAt, senderId, receiverId)
  }

  async searchByParticipantId(participantId: string): Promise<Message[]> {
    return await MongooseMessageModel.find({
      $or: [{ senderId: participantId }, { receiverId: participantId }],
    }).sort({ sentAt: -1 })
  }
}

export { MongooseMessageRepository }
