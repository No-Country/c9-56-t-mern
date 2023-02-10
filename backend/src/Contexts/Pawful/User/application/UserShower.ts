import { UserDoesNotExistError } from "../domain/errors/UserDoesNotExistError"
import type { UserRepository } from "../domain/repositories/UserRepository"
import { User } from "../domain/valueObjects/User"

class UserShower {
  constructor(private readonly userRepository: UserRepository) {}

  async run(id: string): Promise<User> {
    const userFound = await this.userRepository.findById(id)
    console.log("here")

    if (!userFound) {
      throw new UserDoesNotExistError()
    }

    const { email, passwordHash, avatar, roleId } = userFound

    return new User(id, email, passwordHash, avatar, roleId)
  }
}

export { UserShower }
