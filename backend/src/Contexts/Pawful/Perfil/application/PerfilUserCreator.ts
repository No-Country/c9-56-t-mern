import type { PerfilUserRepository } from "../domain/repositories/PerfilUserRepository"
import type { PerfilUser } from "../domain/valueObjects/PerfilUser"

class PerfilUserCreator {
  constructor(private readonly perfilUserRepository: PerfilUserRepository) {}

  async run(perfil: PerfilUser): Promise<PerfilUser> {

    return await this.perfilUserRepository.savePerfilUser(perfil)
  }
}

export { PerfilUserCreator }
