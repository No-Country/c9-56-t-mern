import type { Request, Response } from "express"

import { CategoryDeleteOne } from "../../../../Contexts/Pawful/Category/application/CategoryDelete"
import type { CategoryRepository } from "../../../../Contexts/Pawful/Category/domain/repositories/CategoryRepository"
import { MongooseCategoryRepository } from "../../../../Contexts/Pawful/Category/infrastructure/persistence/mongoose/MongooseCategoryRepository"
import { MissingFieldsError } from "../../../../Contexts/shared/domain/errors/MissingFieldsError"
import { HttpCode } from "../../../shared/HttpCode"

class DeleteCategoryController {
  private readonly categoryRepository: CategoryRepository
  private readonly categoryDeleteOne: CategoryDeleteOne

  constructor() {
    this.categoryRepository = new MongooseCategoryRepository()
    this.categoryDeleteOne = new CategoryDeleteOne(this.categoryRepository)
  }

  async run(req: Request, res: Response): Promise<void> {
    const fields = req.params as { [key: string]: unknown }
    const { id } = fields

    if (typeof id !== "string") {
      throw new MissingFieldsError()
    }

    await this.categoryDeleteOne.run(id)
    res.status(HttpCode.Ok).send({ msg: "category removed successfully" })
  }
}

export { DeleteCategoryController }
