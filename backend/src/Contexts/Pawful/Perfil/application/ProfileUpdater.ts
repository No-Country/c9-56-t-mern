import type { PartialExcept } from "../../../shared/domain/types"
import { ProfileDoesNotExistError } from "../domain/errors/ProfilesDoesNotExistError"
import type { PerfilUserRepository } from "../domain/repositories/PerfilUserRepository"
import type { PerfilUser } from "../domain/valueObjects/PerfilUser"
import type { PerfilUserPro } from "../domain/valueObjects/PerfilUserPro"

class UserProfileUpdater {
  constructor(private readonly userProfileRepository: PerfilUserRepository) {}

  async updateProfileUser(profile: PartialExcept<PerfilUser, "id">): Promise<PerfilUser> {
    const userFound = await this.userProfileRepository.profileUserUpdateById(profile)

    if (!userFound) {
      throw new ProfileDoesNotExistError()
    }

    return userFound
  }

  async updateProfilePro(profile: PartialExcept<PerfilUserPro, "id">): Promise<PerfilUserPro> {
    const userFound = await this.userProfileRepository.profileUserProUpdateById(profile)

    if (!userFound) {
      throw new ProfileDoesNotExistError()
    }

    return userFound
  }
}

export { UserProfileUpdater }
