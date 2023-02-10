import { HttpCode } from "../../../../../apps/shared/HttpCode"
import { BaseError } from "../../../../shared/domain/errors/BaseError"

class CategoryNotFound extends BaseError {
  readonly httpCode = HttpCode.Conflict
  readonly name = "CategoryError"

  constructor() {
    super("Category does not exist")
  }
}

export { CategoryNotFound }
