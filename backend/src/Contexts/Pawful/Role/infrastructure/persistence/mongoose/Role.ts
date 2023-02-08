import { Schema, model } from "mongoose"
import { RoleModel } from "../../../../Role/domain/models/RoleModel"

const RoleSchema = new Schema<RoleModel>(
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

const Role = model<RoleModel>("Role", RoleSchema)

export { Role }
