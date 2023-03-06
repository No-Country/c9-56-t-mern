import { model, Schema } from "mongoose"
import { MessageModel } from "../../../domain/models/MessageModel"

const MongooseMessageSchema = new Schema<MessageModel>({
  id: { type: String, required: true },
  content: { type: String, required: true },
  sentAt: { type: String, required: true },
  senderId: { type: String, required: true },
  receiverId: { type: String, required: true },
})

const MongooseMessageModel = model<MessageModel>(
  "Message",
  MongooseMessageSchema,
)

export { MongooseMessageModel }
