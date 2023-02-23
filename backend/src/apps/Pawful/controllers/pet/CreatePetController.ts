import { Request, Response } from "express"
import { Types } from "mongoose"
import { PetCreator } from "../../../../Contexts/Pawful/Pet/application/PetCreator"
import { PetRepository } from "../../../../Contexts/Pawful/Pet/domain/repositories/PetRepository"
import { Pet } from "../../../../Contexts/Pawful/Pet/domain/valueObjects/Pet"
import { MongoosePetRepository } from "../../../../Contexts/Pawful/Pet/infrastructure/persistence/mongoose/MongoosePetRepository"
import { isValidPetGender } from "../../../../Contexts/Pawful/Pet/shared/utils/isValidPetGender"
import { isValidPetType } from "../../../../Contexts/Pawful/Pet/shared/utils/isValidPetType"
import { MissingFieldsError } from "../../../../Contexts/shared/domain/errors/MissingFieldsError"
import { HttpCode } from "../../../shared/HttpCode"

class CreatePetController {
  private readonly petRepository: PetRepository
  private readonly petCreator: PetCreator

  constructor() {
    this.petRepository = new MongoosePetRepository()
    this.petCreator = new PetCreator(this.petRepository)
  }

  async run(req: Request, res: Response): Promise<void> {
    const fields = req.body as { [key: string]: unknown }
    const {
      name,
      photo,
      size,
      ageRange,
      gender,
      profileId,
      type,
      race,
      about,
    } = fields

    if (
      typeof name !== "string" ||
      typeof photo !== "string" ||
      typeof size !== "string" ||
      typeof ageRange !== "string" ||
      typeof profileId !== "string" ||
      typeof race !== "string" ||
      !about ||
      typeof about !== "string" ||
      !isValidPetGender(gender) ||
      !isValidPetType(type)
    ) {
      throw new MissingFieldsError()
    }

    const objectId = new Types.ObjectId()

    const pet = new Pet(
      objectId.toString(),
      name,
      photo,
      size,
      ageRange,
      gender,
      profileId,
      type,
      race,
      about,
    )

    await this.petCreator.run(pet)

    res.status(HttpCode.Created).send({ pet })
  }
}

export { CreatePetController }
