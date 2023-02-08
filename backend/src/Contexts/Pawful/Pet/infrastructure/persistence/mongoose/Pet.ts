import { Schema, model } from "mongoose"
import { PetModel } from "../../../domain/models/PetModel"

const PetSchema = new Schema<PetModel>(
  {
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      enum: ["macho", "hembra"],
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    ageRange: {
      type: String,
      required: true,
    },
    profileId: String,
    typeId: String,
    raceId: String,
  },
  {
    timestamps: true,
  },
)

const Pet = model<PetModel>("Pet", PetSchema)

export { Pet }
