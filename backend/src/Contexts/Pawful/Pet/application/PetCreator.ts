import { PetRepository } from "../domain/repositories/PetRepository"
import { Pet } from "../domain/valueObjects/Pet"

class PetCreator {
  constructor(private readonly petRepository: PetRepository) {}

  async run(pet: Pet): Promise<Pet> {
    return await this.petRepository.save(pet)
  }
}

export { PetCreator }
