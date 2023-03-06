import { PerfilUserRepository } from "../../../domain/repositories/PerfilUserRepository"
import { PerfilUser } from "../../../domain/valueObjects/PerfilUser"
import { PerfilUserPro } from "../../../domain/valueObjects/PerfilUserPro"

class MemoryProfileRepository {
  private static profiles = new Map<string, PerfilUser | PerfilUserPro>()

  constructor(
    private readonly fallbackProfileRepository: PerfilUserRepository,
  ) {}

  async search(id: string): Promise<PerfilUser | PerfilUserPro | null> {
    const memoryProfile = MemoryProfileRepository.profiles.get(id)

    if (memoryProfile) return memoryProfile

    const profileUser = await this.fallbackProfileRepository.findByProfileId(id)

    if (profileUser) {
      MemoryProfileRepository.profiles.set(id, profileUser)
      return profileUser
    }

    const profileUserPro =
      await this.fallbackProfileRepository.findByProfileProId(id)

    if (profileUserPro) {
      MemoryProfileRepository.profiles.set(id, profileUserPro)
      return profileUserPro
    }

    return null
  }
}

export { MemoryProfileRepository }
