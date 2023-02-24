import type { PetModel } from "../models/PetModel"
import type { PetGender } from "./PetGender"
import type { PetType } from "./PetType"

class Pet implements PetModel {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly photo: string,
    readonly size: string,
    readonly ageRange: string,
    readonly gender: PetGender,
    readonly profileId: string,
    readonly type: PetType,
    readonly race: string,
    readonly about: string,
  ) {}
}

export { Pet }
