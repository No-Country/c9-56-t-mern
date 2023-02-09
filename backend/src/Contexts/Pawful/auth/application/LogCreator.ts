import { UserNotFound } from "../domain/errors/UserNotFound"
import { UserPasswordNotValid } from "../domain/errors/UserPasswordNotValid"
import type { LogRepository } from "../domain/repositories/LogRepository"
import type { User } from "../../User/domain/valueObjects/User"
import type { Log } from "../domain/valueObjects/Log"
import { compare } from "bcrypt"
class LogCreator {
  constructor(private readonly logRepository: LogRepository) {}

  async run(user: Log): Promise<User> {
    const userFound = await this.logRepository.findByEmail(user.email)
    if (!userFound) {
      throw new UserNotFound()
    }
    const validatePass = await compare(user.password, userFound.passwordHash)
    if (!validatePass) {
      throw new UserPasswordNotValid()
    }
    return userFound
  }
}

export { LogCreator }
