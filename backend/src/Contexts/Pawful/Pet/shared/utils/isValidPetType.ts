import { PetType } from "../../domain/valueObjects/PetType"

const isValidPetType = (petType: unknown): petType is PetType =>
  Object.values(PetType).includes(petType as PetType)

export { isValidPetType }
