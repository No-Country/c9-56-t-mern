import { PetGender } from "../../domain/valueObjects/PetGender"

const isValidPetGender = (petGender: unknown): petGender is PetGender =>
  Object.values(PetGender).includes(petGender as PetGender)

export { isValidPetGender }
