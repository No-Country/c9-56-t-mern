import { PartialExcept } from "../../../../shared/domain/types"
import type { UserModel } from "../models/UserModel"
import type { User } from "../valueObjects/User"

interface UserRepository {
  findByEmail: (email: string) => Promise<User | null>
  findById: (id: string) => Promise<User | null>
  save: (user: User) => Promise<User>
  updateById: (user: PartialExcept<UserModel, "id">) => Promise<User | null>
}

export { type UserRepository }
