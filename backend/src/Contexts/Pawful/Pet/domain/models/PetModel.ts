export enum Sex {
  Macho = "macho",
  Hembra = "hembra",
}

interface PetModel {
  id: string
  name: string
  photo: string
  size: string
  ageRange: string
  sex: Sex
  profileId: string
  typeId: string
  raceId: string
}

export { type PetModel }
