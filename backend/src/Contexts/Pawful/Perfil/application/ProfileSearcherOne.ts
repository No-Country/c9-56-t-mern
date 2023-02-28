import { ProfileDoesNotExistError } from "../domain/errors/ProfilesDoesNotExistError"
import { PerfilUserRepository } from "../domain/repositories/PerfilUserRepository"
import { PerfilUser } from "../domain/valueObjects/PerfilUser"
import { PerfilUserPro } from "../domain/valueObjects/PerfilUserPro"


class ProfileSearcherOne {
  constructor(private readonly profileRepository: PerfilUserRepository) {}

  async run(id: string): Promise<PerfilUser | PerfilUserPro > {
    const profileUserFound = await this.profileRepository.findByProfileId(id)
    const profileUserProFound = await this.profileRepository.findByProfileProId(id)
    
    if(profileUserFound) return profileUserFound
    if(profileUserProFound) return profileUserProFound
    throw new ProfileDoesNotExistError()

  }
}

export { ProfileSearcherOne }
