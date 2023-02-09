import type { HttpCode } from "../../../../apps/shared/HttpCode"

abstract class BaseError extends Error {
  abstract readonly httpCode: HttpCode
}

export { BaseError }
