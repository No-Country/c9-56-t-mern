import { MessageMedia } from "../valueObjects/MessageMedia"

interface MessageModel {
  id: string
  content: string
  sentAt: string // ISO 8601
  senderId: string
  receiverId: string
  media?: MessageMedia[]
}

export { type MessageModel }
