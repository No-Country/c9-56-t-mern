import { MessageRepository } from "../domain/repositories/MessageRepository"
import { Message } from "../domain/valueObjects/Message"

class MessageCreator {
  constructor(private readonly messageRepository: MessageRepository) {}

  async run(message: Message): Promise<Message> {
    return await this.messageRepository.save(message)
  }
}

export { MessageCreator }
