import { Schema, model } from "mongoose"
import { CategoryModel } from "../../../domain/models/CategoryModel"

const CategorySchema = new Schema<CategoryModel>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
)

const Category = model<CategoryModel>("Category", CategorySchema)

export { Category }
