import type { PerfilUser } from "../valueObjects/PerfilUser"
import type { PerfilUserPro } from "../valueObjects/PerfilUserPro"

interface PerfilUserRepository {
  savePerfilUser: (perfilUser: PerfilUser) => Promise<PerfilUser>
  savePerfilUserPro: (perfilUserPro: PerfilUserPro) => Promise<PerfilUserPro>
  getProfiles: (id: string) => Promise<any[] | null>
  findByProfileId: (id: string) => Promise<PerfilUser | null>
  findByProfileProId: (id: string) => Promise< PerfilUserPro | null>

}

export { type PerfilUserRepository }
