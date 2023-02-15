import type { Request, Response } from "express"

import { ProfileShower } from "../../../../Contexts/Pawful/Perfil/application/ProfileShower"
import type { PerfilUserRepository } from "../../../../Contexts/Pawful/Perfil/domain/repositories/PerfilUserRepository"
import { MongoosePerfilUserRepository } from "../../../../Contexts/Pawful/Perfil/infrastructure/persistence/mongoose/MongooseProfileUserRepository"
import { HttpCode } from "../../../shared/HttpCode"

class ShowProfileController {
  private readonly profileRepository: PerfilUserRepository
  private readonly profileShower: ProfileShower

  constructor() {
    this.profileRepository = new MongoosePerfilUserRepository()
    this.profileShower = new ProfileShower(this.profileRepository)
  }

  async run(req: Request, res: Response): Promise<void> {

    const data = await this.profileShower.run(req.logedInUser?.id!)

    res.status(HttpCode.Ok).send(data)
  }
}

export { ShowProfileController }
