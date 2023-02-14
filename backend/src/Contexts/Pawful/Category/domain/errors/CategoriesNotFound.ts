import { HttpCode } from "../../../../../apps/shared/HttpCode"
import { BaseError } from "../../../../shared/domain/errors/BaseError"

class CategoriesNotFound extends BaseError {
  readonly httpCode = HttpCode.NotFound
  readonly name = "CategoriesNotFound"

  constructor() {
    super("There are no categories")
  }
}

export { CategoriesNotFound }
