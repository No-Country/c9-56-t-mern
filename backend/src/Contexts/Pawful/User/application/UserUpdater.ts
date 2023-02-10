import type { PartialExcept } from "../../../shared/domain/types"
import { UserDoesNotExistError } from "../domain/errors/UserDoesNotExistError"
import type { UserRepository } from "../domain/repositories/UserRepository"
import type { User } from "../domain/valueObjects/User"

class UserUpdater {
  constructor(private readonly userRepository: UserRepository) {}

  async run(user: PartialExcept<User, "id">): Promise<User> {
    const userFound = await this.userRepository.updateById(user)

    if (!userFound) {
      throw new UserDoesNotExistError()
    }

    return userFound
  }
}

export { UserUpdater }
