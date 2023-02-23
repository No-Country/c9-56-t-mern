import { Pet } from "../valueObjects/Pet"

interface PetRepository {
  save: (pet: Pet) => Promise<Pet>
}

export { type PetRepository }
