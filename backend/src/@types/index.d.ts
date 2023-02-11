import { User } from "../Contexts/Pawful/User/domain/valueObjects/User"

declare global {
  namespace Express {
    export interface Request {
      logedInUserId?: User["id"]
    }
  }
}
