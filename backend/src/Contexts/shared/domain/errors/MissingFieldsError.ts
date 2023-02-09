import { HttpCode } from "../../../../apps/shared/HttpCode"
import { BaseError } from "./BaseError"

class MissingFieldsError extends BaseError {
  readonly httpCode = HttpCode.UnprocessableEntity
  readonly name = "MissingFieldsError"

  constructor() {
    super("Missing required fields")
  }
}

export { MissingFieldsError }
