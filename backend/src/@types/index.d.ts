import { User } from "../Contexts/Pawful/User/domain/valueObjects/User"

declare global {
  namespace Express {
    export interface Request {
      logedInUser?: Pick<User, "id" | "roleId">
    }
  }
}
