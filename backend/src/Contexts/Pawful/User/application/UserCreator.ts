import { UserAlreadyExistsError } from "../domain/errors/UserAlreadyExistsError"
import type { UserRepository } from "../domain/repositories/UserRepository"
import type { User } from "../domain/valueObjects/User"

class UserCreator {
  constructor(private readonly userRepository: UserRepository) {}

  async run(user: User): Promise<User> {
    const userFound = await this.userRepository.findByEmail(user.email)

    if (userFound) {
      throw new UserAlreadyExistsError()
    }

    return await this.userRepository.save(user)
  }
}

export { UserCreator }
