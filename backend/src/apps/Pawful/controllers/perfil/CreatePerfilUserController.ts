import type { Request, Response } from "express"
import { Types } from "mongoose"

import { PerfilUserCreator } from "../../../../Contexts/Pawful/Perfil/application/PerfilUserCreator"
import type { PerfilUserRepository } from "../../../../Contexts/Pawful/Perfil/domain/repositories/PerfilUserRepository"
import { PerfilUser } from "../../../../Contexts/Pawful/Perfil/domain/valueObjects/PerfilUser"
import { MongoosePerfilUserRepository } from "../../../../Contexts/Pawful/Perfil/infrastructure/persistence/mongoose/MongooseProfileUserRepository"
import { MissingFieldsError } from "../../../../Contexts/shared/domain/errors/MissingFieldsError"
import { HttpCode } from "../../../shared/HttpCode"

class CreatePerfilUserController {
  private readonly pefilUserRepository: PerfilUserRepository
  private readonly perfilUserCreator: PerfilUserCreator

  constructor() {
    this.pefilUserRepository = new MongoosePerfilUserRepository()
    this.perfilUserCreator = new PerfilUserCreator(this.pefilUserRepository)
  }

  async run(req: Request, res: Response): Promise<void> {
    const fields = req.body as { [key: string]: unknown }
    const { name, lastname, image, userId, phone, address} = fields

    if (
      typeof name !== "string" ||
      typeof lastname !== "string" ||
      typeof image !== "string" ||
      typeof userId !== "string" ||
      typeof phone !== "string" ||
      typeof address !== "string"
    ) {
      throw new MissingFieldsError()
    }
    const objectId = new Types.ObjectId();
    const idUser = new Types.ObjectId(userId)

    const perfil = new PerfilUser(
      objectId.toString(),
      name,
      lastname,
      image, 
      idUser,
      phone,
      address
    )

    await this.perfilUserCreator.run(perfil)

    res.status(HttpCode.Created).send({ perfil })
  }
}

export { CreatePerfilUserController }
