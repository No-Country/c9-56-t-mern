import { Role } from "../../domain/valueObjects/Role"

const isValidRole = (role: unknown): role is Role =>
  Object.values(Role).includes(role as Role)

export { isValidRole }
