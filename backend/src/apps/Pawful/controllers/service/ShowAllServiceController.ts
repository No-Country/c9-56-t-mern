import type { Request, Response } from "express"

import { ServiceAllShower } from "../../../../Contexts/Pawful/services/application/ServiceAllShower"
import type { ServiceRepository } from "../../../../Contexts/Pawful/services/domain/repositories/ServiceRepository"
import { MongooseServiceRepository } from "../../../../Contexts/Pawful/services/infrastructure/persistence/mongoose/MongooseServiceRepository"
import { MissingFieldsError } from "../../../../Contexts/shared/domain/errors/MissingFieldsError"
import { HttpCode } from "../../../shared/HttpCode"

class ShowAllServiceController {
  private readonly serviceRepository: ServiceRepository
  private readonly serviceShower: ServiceAllShower

  constructor() {
    this.serviceRepository = new MongooseServiceRepository()
    this.serviceShower = new ServiceAllShower(this.serviceRepository)
  }

  async run(req: Request, res: Response): Promise<void> {

    const services = await this.serviceShower.run()

    res.status(HttpCode.Ok).send(services)
  }
}

export { ShowAllServiceController }
