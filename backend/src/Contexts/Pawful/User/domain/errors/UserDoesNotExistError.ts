import { HttpCode } from "../../../../../apps/shared/HttpCode"
import { BaseError } from "../../../../shared/domain/errors/BaseError"

class UserDoesNotExistError extends BaseError {
  readonly httpCode = HttpCode.NotFound
  readonly name = "UserDoesNotExistError"

  constructor() {
    super("User does not exist")
  }
}

export { UserDoesNotExistError }
