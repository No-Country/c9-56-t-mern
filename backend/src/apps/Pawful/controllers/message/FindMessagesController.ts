import { Request, Response } from "express"
import { MessageSearcher } from "../../../../Contexts/Pawful/Message/application/MessageSearcher"
import { MessageRepository } from "../../../../Contexts/Pawful/Message/domain/repositories/MessageRepository"
import { MongooseMessageRepository } from "../../../../Contexts/Pawful/Message/infrastructure/persistence/mongoose/MongooseMessageRepository"
import { MissingFieldsError } from "../../../../Contexts/shared/domain/errors/MissingFieldsError"
import { HttpCode } from "../../../shared/HttpCode"

class FindMessagesController {
  private readonly messageRepository: MessageRepository
  private readonly messageSearcher: MessageSearcher

  constructor() {
    this.messageRepository = new MongooseMessageRepository()
    this.messageSearcher = new MessageSearcher(this.messageRepository)
  }

  async run(req: Request, res: Response): Promise<void> {
    const participantId = req.query.participantId as unknown

    if (typeof participantId !== "string") {
      throw new MissingFieldsError()
    }

    const messages = await this.messageSearcher.run(participantId)

    res.status(HttpCode.Ok).send(messages)
  }
}

export { FindMessagesController }
