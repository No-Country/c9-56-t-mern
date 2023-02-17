import { hash } from "bcrypt"
import type { Request, Response } from "express"
import { Types } from "mongoose"

import { CategorySearcheOne } from "../../../../Contexts/Pawful/Category/application/CategorySearcherOne"
import type { CategoryRepository } from "../../../../Contexts/Pawful/Category/domain/repositories/CategoryRepository"
import { Category } from "../../../../Contexts/Pawful/Category/domain/valueObjects/Category"
import { MongooseCategoryRepository } from "../../../../Contexts/Pawful/Category/infrastructure/persistence/mongoose/MongooseCategoryRepository"
import { MissingFieldsError } from "../../../../Contexts/shared/domain/errors/MissingFieldsError"
import { HttpCode } from "../../../shared/HttpCode"
import { SALT_ROUNDS } from "../../shared/constants"

class CategorySearchOneController {
  private readonly categoryRepository: CategoryRepository
  private readonly categorySearchOne: CategorySearcheOne

  constructor() {
    this.categoryRepository = new MongooseCategoryRepository()
    this.categorySearchOne = new CategorySearcheOne(this.categoryRepository)
  }

  async run(req: Request, res: Response): Promise<void> {
    const fields = req.params as { [key: string]: unknown }
    const { id } = fields

    if (typeof id !== "string") {
      throw new MissingFieldsError()
    }

    const data = await this.categorySearchOne.run(id)

    res.status(HttpCode.Created).send({ data })
  }
}

export { CategorySearchOneController }
