import { model, Schema } from "mongoose"

import type { UserModel } from "../../../domain/models/UserModel"

const MongooseUserSchema = new Schema<UserModel>({
  id: { type: String, required: true },
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  avatar: { type: String, required: true },
  roleId: { type: String, required: true },
})

const MongooseUserModel = model<UserModel>("User", MongooseUserSchema)

export { MongooseUserModel }
