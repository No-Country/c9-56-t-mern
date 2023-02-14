import type { Request, Response } from "express"

import { CategorySearchAll } from "../../../../Contexts/Pawful/Category/application/CategorySearchAll"
import type { CategoryRepository } from "../../../../Contexts/Pawful/Category/domain/repositories/CategoryRepository"
import { MongooseCategoryRepository } from "../../../../Contexts/Pawful/Category/infrastructure/persistence/mongoose/MongooseCategoryRepository"
import { MissingFieldsError } from "../../../../Contexts/shared/domain/errors/MissingFieldsError"
import { HttpCode } from "../../../shared/HttpCode"

class CategorySearchAllController {
  private readonly categoryRepository: CategoryRepository
  private readonly categorySearchAll: CategorySearchAll

  constructor() {
    this.categoryRepository = new MongooseCategoryRepository()
    this.categorySearchAll = new CategorySearchAll(this.categoryRepository)
  }

  async run(req: Request, res: Response): Promise<void> {
    const data = await this.categorySearchAll.run()
    res.status(HttpCode.Ok).send({ data })
  }
}

export { CategorySearchAllController }
