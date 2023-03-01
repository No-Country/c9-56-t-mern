import type { Request, Response } from "express"
import { Types } from "mongoose"

import { ServiceCreator } from "../../../../Contexts/Pawful/services/application/ServiceCreator"
import type { ServiceRepository } from "../../../../Contexts/Pawful/services/domain/repositories/ServiceRepository"
import { Service } from "../../../../Contexts/Pawful/services/domain/valueObjects/Service"
import { MongooseServiceRepository } from "../../../../Contexts/Pawful/services/infrastructure/persistence/mongoose/MongooseServiceRepository"
import { MissingFieldsError } from "../../../../Contexts/shared/domain/errors/MissingFieldsError"
import { HttpCode } from "../../../shared/HttpCode"

class CreateServiceController {
  private readonly serviceRepository: ServiceRepository
  private readonly serviceCreator: ServiceCreator

  constructor() {
    this.serviceRepository = new MongooseServiceRepository()
    this.serviceCreator = new ServiceCreator(this.serviceRepository)
  }

  async run(req: Request, res: Response): Promise<void> {
    const fields = req.body as { [key: string]: unknown }
    const { name, presentacionPersonal, presentacion_del_servicio, image } =
      fields

    if (
      typeof name !== "string" ||
      typeof presentacionPersonal !== "string" ||
      typeof presentacion_del_servicio !== "string" ||
      typeof image !== "string"
    ) {
      throw new MissingFieldsError()
    }

    const objectId = new Types.ObjectId()

    const service = new Service(
      objectId.toString(),
      name,
      presentacionPersonal,
      presentacion_del_servicio,
      image,
      req.body.profileId,
      req.body.categoryId,
    )

    await this.serviceCreator.run(service)

    res.status(HttpCode.Created).send({ service })
  }
}

export { CreateServiceController }
