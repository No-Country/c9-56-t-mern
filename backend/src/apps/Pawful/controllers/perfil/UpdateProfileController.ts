import type { Request, Response } from "express"
import { Types } from "mongoose"
import type { PartialExcept } from "../../../../Contexts/shared/domain/types"
import { UserProfileUpdater } from "../../../../Contexts/Pawful/Perfil/application/ProfileUpdater"
import type { PerfilUserRepository } from "../../../../Contexts/Pawful/Perfil/domain/repositories/PerfilUserRepository"
import { PerfilUserModel } from "../../../../Contexts/Pawful/Perfil/domain/models/PerfilUserModel"
import { PerfilProfesionalModel } from "../../../../Contexts/Pawful/Perfil/domain/models/PerfilProfesionalModel"
import { PerfilUserPro } from "../../../../Contexts/Pawful/Perfil/domain/valueObjects/PerfilUserPro"
import { PerfilUser } from "../../../../Contexts/Pawful/Perfil/domain/valueObjects/PerfilUser"
import { MongoosePerfilUserRepository } from "../../../../Contexts/Pawful/Perfil/infrastructure/persistence/mongoose/MongooseProfileUserRepository"
import { MissingFieldsError } from "../../../../Contexts/shared/domain/errors/MissingFieldsError"
import { HttpCode } from "../../../shared/HttpCode"

class UpdateUserProfileController {
  private static fieldsAreValid(fields: {
    [key: string]: unknown
  }): fields is { [key: string]: string | undefined } {
    const { name, dni, image, userId, phone, address} = fields

    return (
      (!name || typeof name === "string") &&
      (!dni || typeof dni === "number") &&
      (!image || typeof image === "string") &&
      (!userId || typeof userId === "string") &&
      (!phone || typeof phone === "string") &&
      (!address || typeof address === "string")
    )
  }

  private readonly userRepository: PerfilUserRepository
  private readonly userUpdater: UserProfileUpdater

  constructor() {
    this.userRepository = new MongoosePerfilUserRepository()
    this.userUpdater = new UserProfileUpdater(this.userRepository)
  }

  async run(req: Request, res: Response): Promise<void> {
    const fields = req.body as { [key: string]: unknown }
    const id = req.params.id as unknown

    // Check id is a string and any other valid existing field is too
    if (
      !UpdateUserProfileController.fieldsAreValid(fields) ||
      typeof id !== "string"
    ) {
      throw new MissingFieldsError()
    }

    if (req.body.rol == "OWNER") {
      const newProfileUser: PartialExcept<PerfilUserModel, "id"> = {
        id,
        ...fields
      }
      const data = await this.userUpdater.updateProfileUser(newProfileUser)
      res.status(HttpCode.Ok).send(data)
    }else{
      const newProfilePro: PartialExcept<PerfilProfesionalModel, "id"> = {
        id,
        ...fields
      }
      const data = await this.userUpdater.updateProfilePro(newProfilePro)
      res.status(HttpCode.Ok).send(data)
    }

    
  }
}

export { UpdateUserProfileController }
