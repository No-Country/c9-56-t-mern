import type { Request, Response } from "express"
import { Types } from "mongoose"

import { CategoryCreator } from "../../../../Contexts/Pawful/Category/application/CategoryCreator"
import type { CategoryRepository } from "../../../../Contexts/Pawful/Category/domain/repositories/CategoryRepository"
import { Category } from "../../../../Contexts/Pawful/Category/domain/valueObjects/Category"
import { MongooseCategoryRepository } from "../../../../Contexts/Pawful/Category/infrastructure/persistence/mongoose/MongooseCategoryRepository"
import { MissingFieldsError } from "../../../../Contexts/shared/domain/errors/MissingFieldsError"
import { HttpCode } from "../../../shared/HttpCode"

class CreateCategoryController {
  private readonly categoryRepository: CategoryRepository
  private readonly categoryCreator: CategoryCreator

  constructor() {
    this.categoryRepository = new MongooseCategoryRepository()
    this.categoryCreator = new CategoryCreator(this.categoryRepository)
  }

  async run(req: Request, res: Response): Promise<void> {
    const fields = req.body as { [key: string]: unknown }
    const { name, description } = fields

    if (typeof name !== "string" || typeof description !== "string") {
      throw new MissingFieldsError()
    }

    const objectId = new Types.ObjectId()
    const category = new Category(objectId.toString(), name, description)

    await this.categoryCreator.run(category)
    res.status(HttpCode.Created).send({ category })
  }
}

export { CreateCategoryController }
