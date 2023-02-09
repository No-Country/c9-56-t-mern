import { HttpCode } from "../../../../../apps/shared/HttpCode"
import { BaseError } from "../../../../shared/domain/errors/BaseError"

class UserNotFound extends BaseError {
  readonly httpCode = HttpCode.Conflict
  readonly name = "UserNotFoundError"

  constructor() {
    super("this email does not exist")
  }
}

export { UserNotFound }
