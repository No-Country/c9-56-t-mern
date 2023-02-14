import type { PerfilUserRepository } from "../../../domain/repositories/PerfilUserRepository"
import { PerfilUser } from "../../../domain/valueObjects/PerfilUser"
import { PerfilUserPro } from "../../../domain/valueObjects/PerfilUserPro"

import { MongoosePerfilUserModel } from "./Perfil"
import { MongoosePerfilUserProModel } from "./PerfilPro"

class MongoosePerfilUserRepository implements PerfilUserRepository {
  async savePerfilUser(perfil: PerfilUser): Promise<PerfilUser> {
    const newUser = new MongoosePerfilUserModel(perfil)
    const savedUser: PerfilUser = await newUser.save()

    const {id, address, image, lastname, name, phone, userId} = savedUser

    return new PerfilUser(id, name, lastname, image, userId, phone, address);
  }

  async savePerfilUserPro(perfil: PerfilUserPro): Promise<PerfilUserPro> {
    const newUser = new MongoosePerfilUserProModel(perfil)
    const savedUser: PerfilUserPro = await newUser.save()

    const {id, address, image, lastname,dni, name, phone, userId,  titleCareer} = savedUser

    return new PerfilUserPro(id, name, lastname, dni, image, userId, phone, address, titleCareer);
  }

  async getProfiles(idUser: string): Promise<any[] | null> {
    const profiles: any[] = []
    const dataStandar = await MongoosePerfilUserModel.findOne({
      userId: idUser
    })
    const dataProfessional = await MongoosePerfilUserProModel.findOne({
      userId: idUser
    })
    if(dataStandar){
      const {id, address, image, lastname, name, phone, userId} = dataStandar
      const profileStandardfound = new PerfilUser(id, name, lastname, image, userId, phone, address);
      profiles.push(profileStandardfound);
    }
    if(dataProfessional){
      const {id, address, image, lastname, name, phone, userId, dni, titleCareer} = dataProfessional
      const profileProfessionalfound = new PerfilUserPro(id, name, lastname, dni, image, userId, phone, address, titleCareer);
      profiles.push(profileProfessionalfound);
    }

    if(profiles.length == 0) return null
    return profiles
    
  }
}

export { MongoosePerfilUserRepository }
