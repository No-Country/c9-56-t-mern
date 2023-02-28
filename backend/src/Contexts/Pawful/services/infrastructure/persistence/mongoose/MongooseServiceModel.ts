import { model, Schema } from "mongoose"

import type { ServiceModel } from "../../../domain/models/ServiceModel"

const MongooseServiceSchema = new Schema<ServiceModel>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  presentacionPersonal: { type: String, required: true },
  presentacion_del_servicio: { type: String, required: true },
  image: { type: String, required: true },
  profileId: { type: String, required: true },
  categoryId: { type: String, required: true },
})

const MongooseServiceModel = model<ServiceModel>(
  "service",
  MongooseServiceSchema,
)

export { MongooseServiceModel }
