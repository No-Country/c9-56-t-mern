import { model, Schema } from "mongoose"
import { UserModel } from "../../../domain/models/UserModel"

const UserSchema = new Schema<UserModel>({
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  avatar: { type: String, required: true },
  roleId: { type: String, required: true },
})

const User = model<UserModel>("User", UserSchema)

export { User }
