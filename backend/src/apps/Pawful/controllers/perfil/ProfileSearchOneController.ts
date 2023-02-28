import type { Request, Response } from "express"

import { ProfileSearcherOne } from "../../../../Contexts/Pawful/Perfil/application/ProfileSearcherOne"
import type { PerfilUserRepository } from "../../../../Contexts/Pawful/Perfil/domain/repositories/PerfilUserRepository"
import { MongoosePerfilUserRepository } from "../../../../Contexts/Pawful/Perfil/infrastructure/persistence/mongoose/MongooseProfileUserRepository"
import { MissingFieldsError } from "../../../../Contexts/shared/domain/errors/MissingFieldsError"
import { HttpCode } from "../../../shared/HttpCode"

class ProfileSearchOneController {
  private readonly profilerRepository: PerfilUserRepository
  private readonly profilerSearchOne: ProfileSearcherOne

  constructor() {
    this.profilerRepository = new MongoosePerfilUserRepository()
    this.profilerSearchOne = new ProfileSearcherOne(this.profilerRepository)
  }

  async run(req: Request, res: Response): Promise<void> {
    const fields = req.params as { [key: string]: unknown }
    const { id } = fields

    if (typeof id !== "string") {
      throw new MissingFieldsError()
    }

    const data = await this.profilerSearchOne.run(id)

    res.status(HttpCode.Created).send({ data })
  }
}

export { ProfileSearchOneController }
