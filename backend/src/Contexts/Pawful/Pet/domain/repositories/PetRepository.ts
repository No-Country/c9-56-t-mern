import { Pet } from "../valueObjects/Pet"

interface PetRepository {
  save: (pet: Pet) => Promise<Pet>
  findByProfileId: (id: string) => Promise<Pet[]>
}

export { type PetRepository }
