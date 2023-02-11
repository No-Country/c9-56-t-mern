import { HttpCode } from "../../../../apps/shared/HttpCode"
import { BaseError } from "./BaseError"

class UnauthenticatedError extends BaseError {
  readonly httpCode = HttpCode.Unauthenticated
  readonly name = "UnauthenticatedError"

  constructor() {
    super("Invalid Bearer token")
  }
}

export { UnauthenticatedError }
