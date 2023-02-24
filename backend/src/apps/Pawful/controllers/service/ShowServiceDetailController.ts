import type { Request, Response } from "express"

import { ServiceDetailShower } from "../../../../Contexts/Pawful/services/application/ServiceDetailShower"
import type { ServiceRepository } from "../../../../Contexts/Pawful/services/domain/repositories/ServiceRepository"
import { MongooseServiceRepository } from "../../../../Contexts/Pawful/services/infrastructure/persistence/mongoose/MongooseServiceRepository"
import { MissingFieldsError } from "../../../../Contexts/shared/domain/errors/MissingFieldsError"
import { HttpCode } from "../../../shared/HttpCode"

class ShowServiceDetailController {
  private readonly serviceRepository: ServiceRepository
  private readonly serviceDetailShower: ServiceDetailShower

  constructor() {
    this.serviceRepository = new MongooseServiceRepository()
    this.serviceDetailShower = new ServiceDetailShower(this.serviceRepository)
  }

  async run(req: Request, res: Response): Promise<void> {
    const fields = req.params as { [key: string]: unknown }
    const { id } = fields

    if (typeof id !== "string") {
      throw new MissingFieldsError()
    }

    const service = await this.serviceDetailShower.run(id)

    res.status(HttpCode.Ok).send(service)
  }
}

export { ShowServiceDetailController }
