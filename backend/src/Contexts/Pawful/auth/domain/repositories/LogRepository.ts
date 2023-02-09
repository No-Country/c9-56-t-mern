import type { User } from "../../../User/domain/valueObjects/User"

interface LogRepository {
  findByEmail: (email: string) => Promise<User | null>
}

export { type LogRepository }
