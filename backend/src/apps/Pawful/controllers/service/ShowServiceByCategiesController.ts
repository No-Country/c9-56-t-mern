import type { Request, Response } from "express"

import { ServiceFilter } from "../../../../Contexts/Pawful/services/application/ServiceFilter"
import type { ServiceRepository } from "../../../../Contexts/Pawful/services/domain/repositories/ServiceRepository"
import { MongooseServiceRepository } from "../../../../Contexts/Pawful/services/infrastructure/persistence/mongoose/MongooseServiceRepository"
import { MissingFieldsError } from "../../../../Contexts/shared/domain/errors/MissingFieldsError"
import { HttpCode } from "../../../shared/HttpCode"

class ShowServiceByCategoryController {
  private readonly serviceRepository: ServiceRepository
  private readonly serviceCategoryShower: ServiceFilter

  constructor() {
    this.serviceRepository = new MongooseServiceRepository()
    this.serviceCategoryShower = new ServiceFilter(this.serviceRepository)
  }

  async run(req: Request, res: Response): Promise<void> {

    const service = await this.serviceCategoryShower.run(req.body.filtro)

    res.status(HttpCode.Ok).send(service)
  }
}

export { ShowServiceByCategoryController }
