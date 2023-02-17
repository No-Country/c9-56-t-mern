import type { PerfilUserRepository } from "../domain/repositories/PerfilUserRepository"
import type { PerfilUser } from "../domain/valueObjects/PerfilUser"
import type { PerfilUserPro } from "../domain/valueObjects/PerfilUserPro"

class PerfilUserCreator {
  constructor(private readonly perfilUserRepository: PerfilUserRepository) {}

  async saveProfileOwner(perfil: PerfilUser): Promise<PerfilUser> {
    return await this.perfilUserRepository.savePerfilUser(perfil)
  }

  async saveProfilePro(perfil: PerfilUserPro): Promise<PerfilUserPro> {
    return await this.perfilUserRepository.savePerfilUserPro(perfil)
  }
}

export { PerfilUserCreator }
