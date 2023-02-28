import { model, Schema } from "mongoose"
import { PerfilProfesionalModel } from "../../../domain/models/PerfilProfesionalModel"

const PerfilSchema = new Schema<PerfilProfesionalModel>(
  {
    id: { type: String, required: true },
    name: {
      type: String,
      required: true,
    },
    dni: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    titleCareer: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  },
)

const MongoosePerfilUserProModel = model<PerfilProfesionalModel>(
  "profileProfessional",
  PerfilSchema,
)

export { MongoosePerfilUserProModel }
