import { PetRepository } from "../../../domain/repositories/PetRepository"
import { Pet } from "../../../domain/valueObjects/Pet"
import { MongoosePetModel } from "./MongoosePetModel"

class MongoosePetRepository implements PetRepository {
  async save(pet: Pet): Promise<Pet> {
    const newPet = new MongoosePetModel(pet)
    const savedPet: Pet = await newPet.save()

    const {
      id,
      name,
      photo,
      size,
      ageRange,
      gender,
      profileId,
      type,
      race,
      about,
    } = savedPet

    return new Pet(
      id,
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
  }
}

export { MongoosePetRepository }
