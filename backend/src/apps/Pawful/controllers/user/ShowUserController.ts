import type { Request, Response } from "express"

import { UserShower } from "../../../../Contexts/Pawful/User/application/UserShower"
import type { UserRepository } from "../../../../Contexts/Pawful/User/domain/repositories/UserRepository"
import { MongooseUserRepository } from "../../../../Contexts/Pawful/User/infrastructure/persistence/mongoose/MongooseUserRepository"
import { MissingFieldsError } from "../../../../Contexts/shared/domain/errors/MissingFieldsError"
import { HttpCode } from "../../../shared/HttpCode"

class ShowUserController {
  private readonly userRepository: UserRepository
  private readonly userShower: UserShower

  constructor() {
    this.userRepository = new MongooseUserRepository()
    this.userShower = new UserShower(this.userRepository)
  }

  async run(req: Request, res: Response): Promise<void> {
    const fields = req.params as { [key: string]: unknown }
    const { id } = fields

    if (typeof id !== "string") {
      throw new MissingFieldsError()
    }

    const { email, avatar, roleId } = await this.userShower.run(id)

    res.status(HttpCode.Ok).send({ id, email, avatar, roleId })
  }
}

export { ShowUserController }
