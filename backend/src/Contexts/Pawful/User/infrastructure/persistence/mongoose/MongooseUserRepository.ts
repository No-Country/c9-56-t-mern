import type { UserRepository } from "../../../domain/repositories/UserRepository"
import { User } from "../../../domain/valueObjects/User"

import { MongooseUserModel } from "./MongooseUserModel"

class MongooseUserRepository implements UserRepository {
  async save(user: User): Promise<User> {
    const newUser = new MongooseUserModel(user)
    const savedUser: User = await newUser.save()

    const { id, email, avatar, passwordHash, roleId } = savedUser

    return new User(id, email, avatar, passwordHash, roleId)
  }

  async findById(id: string): Promise<User | null> {
    const user: User | null = await MongooseUserModel.findOne({ id })

    if (!user) {
      return null
    }

    const { email, avatar, passwordHash, roleId } = user

    return new User(id, email, passwordHash, avatar, roleId)
  }

  async findByEmail(email: string): Promise<User | null> {
    const user: User | null = await MongooseUserModel.findOne({ email })

    if (!user) {
      return null
    }

    const { id, avatar, passwordHash, roleId } = user

    return new User(id, email, avatar, passwordHash, roleId)
  }
}

export { MongooseUserRepository }
