import { ServiceRepository } from "../../../domain/repositories/ServiceRepository"
import { Service } from "../../../domain/valueObjects/Service"

import { MongooseCategoryModel } from "../../../../Category/infrastructure/persistence/mongoose/MongooseCategoryModel"
import { MongooseServiceModel } from "./MongooseServiceModel"

class MongooseServiceRepository implements ServiceRepository {
  async save(oneService: Service): Promise<Service> {
    const service = new MongooseServiceModel(oneService)
    const savedService: Service = await service.save()

    const {
      id,
      name,
      presentacionPersonal,
      presentacion_del_servicio,
      image,
      categoryId,
      profileId,
    } = savedService

    return new Service(
      id,
      name,
      presentacionPersonal,
      presentacion_del_servicio,
      image,
      profileId,
      categoryId,
    )
  }
  async getServices(idProfile: string): Promise<Service[] | null> {
    const services: Service[] | null = await MongooseServiceModel.find({
      profileId: idProfile,
    })

    if (!services) {
      return null
    }

    return services
  }
  async getDetailService(idService: string): Promise<Service | null> {
    const services: Service | null = await MongooseServiceModel.findOne({
      id: idService,
    })

    if (!services) {
      return null
    }

    return services
  }

  async getServiceByCategories(list: String[]): Promise<any[] | null> {
    const resultado = await MongooseCategoryModel.aggregate([
      {
        $lookup: {
          from: "services",
          localField: "id",
          foreignField: "categoryId",
          as: "servicesByCategories",
        },
      },
      { $unwind: "$servicesByCategories" },
      { $match: { name: { $in: list } } },
    ])
    if (resultado.length == 0) return null

    const servicios = this.filter(resultado)

    return servicios
  }

  private filter(data: any[]): any[] {
    return data.map((res) => ({
      ...res.servicesByCategories,
      category: res.name,
    }))
  }
}

export { MongooseServiceRepository }
