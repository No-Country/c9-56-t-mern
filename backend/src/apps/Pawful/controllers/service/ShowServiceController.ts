import type { Request, Response } from "express"

import { ServiceShower } from "../../../../Contexts/Pawful/services/application/ServiceShower"
import type { ServiceRepository } from "../../../../Contexts/Pawful/services/domain/repositories/ServiceRepository"
import { MongooseServiceRepository } from "../../../../Contexts/Pawful/services/infrastructure/persistence/mongoose/MongooseServiceRepository"
import { MissingFieldsError } from "../../../../Contexts/shared/domain/errors/MissingFieldsError"
import { HttpCode } from "../../../shared/HttpCode"

class ShowServiceController {
  private readonly serviceRepository: ServiceRepository
  private readonly serviceShower: ServiceShower

  constructor() {
    this.serviceRepository = new MongooseServiceRepository()
    this.serviceShower = new ServiceShower(this.serviceRepository)
  }

  async run(req: Request, res: Response): Promise<void> {
    const fields = req.params as { [key: string]: unknown }
    const { id } = fields

    if (typeof id !== "string") {
      throw new MissingFieldsError()
    }

    const services = await this.serviceShower.run(id)

    res.status(HttpCode.Ok).send(services)
  }
}

export { ShowServiceController }
