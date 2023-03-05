import { Schema } from "mongoose"
import { MessageMedia } from "../../../domain/valueObjects/MessageMedia"

const MongooseMessageMediaSchema = new Schema<MessageMedia>({
  url: { type: String, required: true },
  mediaType: { type: String, required: true },
})

export { MongooseMessageMediaSchema }
