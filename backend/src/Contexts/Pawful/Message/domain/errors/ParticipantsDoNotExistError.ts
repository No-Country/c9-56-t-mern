import { HttpCode } from "../../../../../apps/shared/HttpCode"
import { BaseError } from "../../../../shared/domain/errors/BaseError"

class ParticipantsDoNotExistError extends BaseError {
  readonly httpCode = HttpCode.NotFound
  readonly name = "ParticipantsDoNotExistError"

  constructor() {
    super("At least one of the participants does not exist")
  }
}

export { ParticipantsDoNotExistError }
