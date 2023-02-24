import { HttpCode } from "../../../../../apps/shared/HttpCode"
import { BaseError } from "../../../../shared/domain/errors/BaseError"

class ServiceNotFound extends BaseError {
  readonly httpCode = HttpCode.NotFound
  readonly name = "ServiceNotFound"

  constructor() {
    super("this Services does not exist")
  }
}

export { ServiceNotFound }
