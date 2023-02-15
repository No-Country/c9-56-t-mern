import { HttpCode } from "../../../../../apps/shared/HttpCode"
import { BaseError } from "../../../../shared/domain/errors/BaseError"

class UserPasswordNotValid extends BaseError {
  readonly httpCode = HttpCode.NotFound
  readonly name = "UserPasswordNotValid"

  constructor() {
    super("You have entered an invalid password")
  }
}

export { UserPasswordNotValid }
