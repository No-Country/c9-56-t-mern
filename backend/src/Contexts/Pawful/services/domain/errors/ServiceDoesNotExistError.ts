import { HttpCode } from "../../../../../apps/shared/HttpCode"
import { BaseError } from "../../../../shared/domain/errors/BaseError"

class ServiceDoesNotExistError extends BaseError {
  readonly httpCode = HttpCode.NotFound
  readonly name = "ServiceDoesNotExistError"

  constructor() {
    super("Services for this user does not exist")
  }
}

export { ServiceDoesNotExistError }
