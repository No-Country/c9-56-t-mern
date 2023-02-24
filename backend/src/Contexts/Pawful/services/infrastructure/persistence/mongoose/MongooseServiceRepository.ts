import type { PartialExcept } from "../../../../../shared/domain/types"
import type { ServiceModel } from "../../../domain/models/ServiceModel"
import { ServiceRepository } from "../../../domain/repositories/ServiceRepository"
import { Service } from "../../../domain/valueObjects/Service"

import { MongooseServiceModel } from "./MongooseServiceModel"

class MongooseServiceRepository implements ServiceRepository {
  async save(oneService: Service): Promise<Service> {
    const service = new MongooseServiceModel(oneService)
    const savedService: Service = await service.save()

    const {id, presentacionPersonal, presentacion_del_servicio, categoryId, profileId } = savedService

    return new Service(id, presentacionPersonal, presentacion_del_servicio, profileId,categoryId)
  }
  async getServices(idProfile: string): Promise<Service[] | null> {
    const services: Service[] | null = await MongooseServiceModel.find({ profileId: idProfile })

    if (!services) {
      return null
    }

    return services
  }
  async getDetailService(idService: string): Promise<Service | null> {
    const services: Service | null = await MongooseServiceModel.findOne({ id: idService })

    if (!services) {
      return null
    }

    return services
  }
}

export { MongooseServiceRepository }
