import type { PerfilUser } from "../valueObjects/PerfilUser"

interface PerfilUserRepository {
  savePerfilUser: (perfilUser: PerfilUser) => Promise<PerfilUser>
}

export { type PerfilUserRepository }
