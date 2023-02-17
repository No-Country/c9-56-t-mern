import { Schema, model } from "mongoose"
import { CategoryModel } from "../../../domain/models/CategoryModel"

const MongooseCategorySchema = new Schema<CategoryModel>(
  {
    id: {
      type: String,
      required: true,
    },
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

const MongooseCategoryModel = model<CategoryModel>(
  "Category",
  MongooseCategorySchema,
)

export { MongooseCategoryModel }
