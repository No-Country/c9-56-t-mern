import { HttpCode } from "../../../../apps/shared/HttpCode"
import { BaseError } from "./BaseError"

class ForbiddenError extends BaseError {
  readonly httpCode = HttpCode.Forbidden
  readonly name = "ForbiddenError"

  constructor() {
    super("The user does not have permission to access this resource")
  }
}

export { ForbiddenError }
