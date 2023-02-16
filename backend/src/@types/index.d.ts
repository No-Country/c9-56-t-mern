import { User } from "../Contexts/Pawful/User/domain/valueObjects/User"

declare global {
  namespace Express {
    export interface Request {
      logedInUser?: Pick<User, "id" | "roles">
    }
  }

  namespace NodeJS {
    export interface ProcessEnv {
      PORT: string
      DB_URI: string
      JWT_PASS: string
    }
  }
}
