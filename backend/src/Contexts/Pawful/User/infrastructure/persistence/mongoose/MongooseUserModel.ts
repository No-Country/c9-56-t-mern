import { model, Schema } from "mongoose"

import type { UserModel } from "../../../domain/models/UserModel"

const MongooseUserSchema = new Schema<UserModel>({
  id: { type: String, required: true },
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  username: { type: String, required: true },
  roles: [{ type: String, required: true }],
})

const MongooseUserModel = model<UserModel>("User", MongooseUserSchema)

export { MongooseUserModel }
