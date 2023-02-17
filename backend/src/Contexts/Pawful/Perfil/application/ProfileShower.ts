import { ProfileDoesNotExistError } from "../domain/errors/ProfilesDoesNotExistError"
import type { PerfilUserRepository } from "../domain/repositories/PerfilUserRepository"

class ProfileShower {
  constructor(private readonly profileRepository: PerfilUserRepository) {}

  async run(id: string): Promise<any[]> {
    const profileFound = await this.profileRepository.getProfiles(id)

    if (!profileFound) {
      throw new ProfileDoesNotExistError()
    }

    return profileFound
  }
}

export { ProfileShower }
