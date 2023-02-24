import type { PetGender } from "../valueObjects/PetGender"
import type { PetType } from "../valueObjects/PetType"

interface PetModel {
  id: string
  name: string
  photo: string
  size: string
  ageRange: string
  gender: PetGender
  profileId: string
  type: PetType
  race: string
  about: string
}

export { type PetModel }
