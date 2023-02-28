import type { Request, Response } from "express"
import { Types } from "mongoose"

import { PerfilUserCreator } from "../../../../Contexts/Pawful/Perfil/application/PerfilUserCreator"
import type { PerfilUserRepository } from "../../../../Contexts/Pawful/Perfil/domain/repositories/PerfilUserRepository"
import { PerfilUser } from "../../../../Contexts/Pawful/Perfil/domain/valueObjects/PerfilUser"
import { PerfilUserPro } from "../../../../Contexts/Pawful/Perfil/domain/valueObjects/PerfilUserPro"
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
    const { name, dni, image, userId, phone, address } = fields

    if (
      typeof name !== "string" ||
      typeof image !== "string" ||
      typeof phone !== "string" ||
      typeof address !== "string"
    ) {
      throw new MissingFieldsError()
    }
    const objectId = new Types.ObjectId()

    if (req.body.rol == "OWNER") {
      const perfil = new PerfilUser(
        objectId.toString(),
        name,
        image,
        req.logedInUser?.id!,
        phone,
        address,
      )
      await this.perfilUserCreator.saveProfileOwner(perfil)
      res.status(HttpCode.Created).send({ perfil })
    } else {
      const perfilProfesional = new PerfilUserPro(
        objectId.toString(),
        name,
        req.body.dni,
        image,
        req.logedInUser?.id!,
        phone,
        address,
        req.body.titleCareer,
      )
      await this.perfilUserCreator.saveProfilePro(perfilProfesional)
      res.status(HttpCode.Created).send({ perfilProfesional })
    }
  }
}

export { CreatePerfilUserController }
