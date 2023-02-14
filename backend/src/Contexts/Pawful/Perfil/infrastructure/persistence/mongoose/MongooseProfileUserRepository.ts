import type { PerfilUserRepository } from "../../../domain/repositories/PerfilUserRepository"
import { PerfilUser } from "../../../domain/valueObjects/PerfilUser"

import { MongoosePerfilUserModel } from "./Perfil"

class MongoosePerfilUserRepository implements PerfilUserRepository {
  async savePerfilUser(perfil: PerfilUser): Promise<PerfilUser> {
    const newUser = new MongoosePerfilUserModel(perfil)
    const savedUser: PerfilUser = await newUser.save()

    const {id, address, image, lastname, name, phone, userId} = savedUser

    return new PerfilUser(id, name, lastname, image, userId, phone, address);
  }
}

export { MongoosePerfilUserRepository }
