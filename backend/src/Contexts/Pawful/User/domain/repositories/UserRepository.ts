import type { User } from "../valueObjects/User"

interface UserRepository {
  findByEmail: (email: string) => Promise<User | null>
  findById: (id: string) => Promise<User | null>
  save: (user: User) => Promise<User>
}

export { type UserRepository }
