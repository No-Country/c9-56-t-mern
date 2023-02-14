import { HttpCode } from "../../../../../apps/shared/HttpCode"
import { BaseError } from "../../../../shared/domain/errors/BaseError"

class ProfileDoesNotExistError extends BaseError {
  readonly httpCode = HttpCode.NotFound
  readonly name = "ProfilesDoesNotExistError"

  constructor() {
    super("Profiles for this user does not exist")
  }
}

export { ProfileDoesNotExistError }
