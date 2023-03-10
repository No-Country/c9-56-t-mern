import type { PartialExcept } from "../../../../../shared/domain/types"
import type { UserModel } from "../../../domain/models/UserModel"
import type { UserRepository } from "../../../domain/repositories/UserRepository"
import { User } from "../../../domain/valueObjects/User"

import { MongooseUserModel } from "./MongooseUserModel"

class MongooseUserRepository implements UserRepository {
  async save(user: User): Promise<User> {
    const newUser = new MongooseUserModel(user)
    const savedUser: User = await newUser.save()

    const { id, email, passwordHash, username, roles } = savedUser

    return new User(id, email, passwordHash, username, roles)
  }

  async findById(id: string): Promise<User | null> {
    const user: User | null = await MongooseUserModel.findOne({ id })

    if (!user) {
      return null
    }

    const { email, passwordHash, username, roles } = user

    return new User(id, email, passwordHash, username, roles)
  }

  async findByEmail(email: string): Promise<User | null> {
    const user: User | null = await MongooseUserModel.findOne({ email })

    if (!user) {
      return null
    }

    const { id, passwordHash, username, roles } = user

    return new User(id, email, passwordHash, username, roles)
  }

  async updateById(user: PartialExcept<UserModel, "id">): Promise<User | null> {
    const { id } = user
    const newUser = await MongooseUserModel.findOneAndUpdate({ id }, user, {
      new: true,
    })

    if (!newUser) {
      return null
    }

    const { email, passwordHash, username, roles } = newUser

    return new User(id, email, passwordHash, username, roles)
  }
}

export { MongooseUserRepository }
