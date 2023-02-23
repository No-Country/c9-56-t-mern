import { HttpCode } from "../../../../apps/shared/HttpCode"
import { BaseError } from "./BaseError"

class NotImplementedError extends BaseError {
  readonly httpCode = HttpCode.NotImplemented
  readonly name = "NotImplementedError"

  constructor() {
    super("The required functionality has not been implemented")
  }
}

export { NotImplementedError }
