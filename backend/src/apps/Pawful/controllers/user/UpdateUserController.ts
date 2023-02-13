import { hash } from "bcrypt"
import type { Request, Response } from "express"

import { UserUpdater } from "../../../../Contexts/Pawful/User/application/UserUpdater"
import type { UserModel } from "../../../../Contexts/Pawful/User/domain/models/UserModel"
import type { UserRepository } from "../../../../Contexts/Pawful/User/domain/repositories/UserRepository"
import { MongooseUserRepository } from "../../../../Contexts/Pawful/User/infrastructure/persistence/mongoose/MongooseUserRepository"
import { ForbiddenError } from "../../../../Contexts/shared/domain/errors/ForbiddenError"
import { MissingFieldsError } from "../../../../Contexts/shared/domain/errors/MissingFieldsError"
import type { PartialExcept } from "../../../../Contexts/shared/domain/types"
import { HttpCode } from "../../../shared/HttpCode"
import { SALT_ROUNDS } from "../../shared/constants"

class UpdateUserController {
  private static fieldsAreValid(fields: {
    [key: string]: unknown
  }): fields is { [key: string]: string | undefined } {
    const { email, password, avatar, roleId } = fields

    return (
      (!email || typeof email === "string") &&
      (!password || typeof password === "string") &&
      (!avatar || typeof avatar === "string") &&
      (!roleId || typeof roleId === "string")
    )
  }

  private readonly userRepository: UserRepository
  private readonly userUpdater: UserUpdater

  constructor() {
    this.userRepository = new MongooseUserRepository()
    this.userUpdater = new UserUpdater(this.userRepository)
  }

  async run(req: Request, res: Response): Promise<void> {
    const fields = req.body as { [key: string]: unknown }
    const id = req.params.id as unknown

    // Check id is a string and any other valid existing field is too
    if (
      !UpdateUserController.fieldsAreValid(fields) ||
      typeof id !== "string"
    ) {
      throw new MissingFieldsError()
    }

    // Check authenticated user is the same as the one to update
    if (req.logedInUser?.id !== id) {
      throw new ForbiddenError()
    }

    const { password, ...fieldsWithoutPassword } = fields

    const newUser: PartialExcept<UserModel, "id"> = {
      id,
      ...fieldsWithoutPassword,
    }

    if (password) {
      const passwordHash = await hash(password, SALT_ROUNDS)
      newUser.passwordHash = passwordHash
    }

    const { email, avatar, roleId } = await this.userUpdater.run(newUser)

    res.status(HttpCode.Ok).send({ id, email, avatar, roleId })
  }
}

export { UpdateUserController }
