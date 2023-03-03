import type { PerfilUser } from "../valueObjects/PerfilUser"
import type { PerfilUserPro } from "../valueObjects/PerfilUserPro"
import type { PerfilUserModel } from "../models/PerfilUserModel"
import type { PerfilProfesionalModel } from "../models/PerfilProfesionalModel"
import { PartialExcept } from "../../../../shared/domain/types"

interface PerfilUserRepository {
  savePerfilUser: (perfilUser: PerfilUser) => Promise<PerfilUser>
  savePerfilUserPro: (perfilUserPro: PerfilUserPro) => Promise<PerfilUserPro>
  getProfiles: (id: string) => Promise<any[] | null>
  findByProfileId: (id: string) => Promise<PerfilUser | null>
  findByProfileProId: (id: string) => Promise< PerfilUserPro | null>
  profileUserUpdateById: (user: PartialExcept<PerfilUserModel, "id">) => Promise<PerfilUser | null>
  profileUserProUpdateById: (user: PartialExcept<PerfilProfesionalModel, "id">) => Promise<PerfilUserPro | null>
}

export { type PerfilUserRepository }
