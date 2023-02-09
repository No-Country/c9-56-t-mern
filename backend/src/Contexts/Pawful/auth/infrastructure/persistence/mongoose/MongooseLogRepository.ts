import type { LogRepository } from "../../../domain/repositories/LogRepository"
import { User } from '../../../../User/domain/valueObjects/User'

import { MongooseUserModel } from "../../../../User/infrastructure/persistence/mongoose/MongooseUserModel";

class MongooseLogRepository implements LogRepository {

  async findByEmail(email: string): Promise<User | null> {
    const user: User | null = await MongooseUserModel.findOne({ email })

    if (!user) {
      return null
    } 
    return user;
  }

}

export { MongooseLogRepository }
