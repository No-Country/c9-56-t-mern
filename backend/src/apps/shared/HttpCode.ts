const enum HttpCode {
  Conflict = 409,
  Created = 201,
  InternalServerError = 500,
  UnprocessableEntity = 422,
  NotFound = 404,
  Ok = 200,
  Unauthenticated = 401,
  Forbidden = 403,
  NotImplemented = 501,
}

export { HttpCode }
