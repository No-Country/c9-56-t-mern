import { model, Schema } from "mongoose"
import { PetModel } from "../../../domain/models/PetModel"

const MongoosePetSchema = new Schema<PetModel>(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    photo: { type: String, required: true },
    size: { type: String, required: true },
    ageRange: { type: String, required: true },
    profileId: { type: String, required: true },
    type: { type: String, enum: ["DOG", "CAT"], required: true },
    gender: { type: String, enum: ["MALE", "FEMALE"], required: true },
    race: { type: String, required: true },
    about: { type: String, required: false, default: null },
  },
  {
    timestamps: true,
  },
)

const MongoosePetModel = model<PetModel>("Pet", MongoosePetSchema)

export { MongoosePetModel }
