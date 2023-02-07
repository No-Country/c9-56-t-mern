import { Schema, model } from "mongoose"
import { PerfilModel } from "../../../domain/models/PerfilModel";

const PerfilSchema = new Schema<PerfilModel>(
  {
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
    titleCareer:[
      {
        type: String
      }
    ]

  },
  {
    timestamps: true,
  },
)

const Perfil = model<PerfilModel>("Perfil", PerfilSchema)

export { Perfil }
