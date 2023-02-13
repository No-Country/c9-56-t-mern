import { Schema, model, Types } from "mongoose"
import { PerfilUserModel } from "../../../domain/models/PerfilUserModel"

const PerfilSchema = new Schema<PerfilUserModel>(
  {
    id: { type: String, required: true },
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    userId: [{
      type: Types.ObjectId,
      ref: 'User',
      required: true,
    }],
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  },
)

const MongoosePerfilUserModel = model<PerfilUserModel>("PerfilUsuario", PerfilSchema)

export { MongoosePerfilUserModel }
