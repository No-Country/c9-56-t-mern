import type { UserModel } from "../models/UserModel"
import { Role } from "./Role"

class User implements UserModel {
  // https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#number-string-boolean-symbol-and-object
  constructor(
    readonly id: string,
    readonly email: string,
    readonly passwordHash: string,
    readonly username: string,
    readonly roles: Role[],
  ) {}
}

export { User }
