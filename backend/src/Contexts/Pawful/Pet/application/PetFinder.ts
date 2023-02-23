import { PetRepository } from "../domain/repositories/PetRepository"
import { Pet } from "../domain/valueObjects/Pet"

class PetFinder {
  constructor(private readonly petRepository: PetRepository) {}

  async run(id: string): Promise<Pet[]> {
    return await this.petRepository.findByProfileId(id)
  }
}

export { PetFinder }
