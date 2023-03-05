import { MessageModel } from "../models/MessageModel"

class Message implements MessageModel {
  constructor(
    readonly id: string,
    readonly content: string,
    readonly sentAt: string,
    readonly senderId: string,
    readonly receiverId: string,
  ) {}
}

export { Message }
