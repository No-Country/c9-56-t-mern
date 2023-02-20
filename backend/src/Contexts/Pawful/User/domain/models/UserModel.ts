import { Role } from "../valueObjects/Role"

interface UserModel {
  id: string
  email: string
  passwordHash: string
  roles: Role[]
}

export { type UserModel }
