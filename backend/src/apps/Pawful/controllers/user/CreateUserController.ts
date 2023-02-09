import { hash } from "bcrypt"
import type { Request, Response } from "express"
import { Types } from "mongoose"

import { UserCreator } from "../../../../Contexts/Pawful/User/application/UserCreator"
import type { UserRepository } from "../../../../Contexts/Pawful/User/domain/repositories/UserRepository"
import { User } from "../../../../Contexts/Pawful/User/domain/valueObjects/User"
import { MongooseUserRepository } from "../../../../Contexts/Pawful/User/infrastructure/persistence/mongoose/MongooseUserRepository"
import { MissingFieldsError } from "../../../../Contexts/shared/domain/errors/MissingFieldsError"
import { HttpCode } from "../../../shared/HttpCode"
import { SALT_ROUNDS } from "../../shared/constants"

class CreateUserController {
  private readonly userRepository: UserRepository
  private readonly userCreator: UserCreator

  constructor() {
    this.userRepository = new MongooseUserRepository()
    this.userCreator = new UserCreator(this.userRepository)
  }

  async run(req: Request, res: Response): Promise<void> {
    const fields = req.body as { [key: string]: unknown }
    const { email, password, avatar, roleId } = fields

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      typeof avatar !== "string" ||
      typeof roleId !== "string"
    ) {
      throw new MissingFieldsError()
    }

    const hashPassword = await hash(password, SALT_ROUNDS)

    const objectId = new Types.ObjectId()

    const user = new User(
      objectId.toString(),
      email,
      hashPassword,
      avatar,
      roleId,
    )

    await this.userCreator.run(user)

    res.status(HttpCode.Created).send({ user })
  }
}

export { CreateUserController }
