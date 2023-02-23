import { Request, Response } from "express"
import { PetFinder } from "../../../../Contexts/Pawful/Pet/application/PetFinder"
import { PetRepository } from "../../../../Contexts/Pawful/Pet/domain/repositories/PetRepository"
import { MongoosePetRepository } from "../../../../Contexts/Pawful/Pet/infrastructure/persistence/mongoose/MongoosePetRepository"
import { NotImplementedError } from "../../../../Contexts/shared/domain/errors/NotImplementedError"
import { HttpCode } from "../../../shared/HttpCode"

class FindPetsController {
  private readonly petRepository: PetRepository
  private readonly petFinder: PetFinder

  constructor() {
    this.petRepository = new MongoosePetRepository()
    this.petFinder = new PetFinder(this.petRepository)
  }

  async run(req: Request, res: Response): Promise<void> {
    const profileId = req.query.profileId as unknown

    if (typeof profileId !== "string") {
      throw new NotImplementedError()
    }

    const pets = await this.petFinder.run(profileId)

    res.status(HttpCode.Ok).send({ pets })
  }
}

export { FindPetsController }
