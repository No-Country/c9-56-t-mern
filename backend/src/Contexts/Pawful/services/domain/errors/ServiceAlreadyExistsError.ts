import { HttpCode } from "../../../../../apps/shared/HttpCode"
import { BaseError } from "../../../../shared/domain/errors/BaseError"

class ServiceAlreadyExistsError extends BaseError {
  readonly httpCode = HttpCode.Conflict
  readonly name = "ServiceAlreadyExistsError"

  constructor() {
    super("Service already exists")
  }
}

export { ServiceAlreadyExistsError }
