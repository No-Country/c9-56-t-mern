import type { PerfilUserRepository } from "../../../domain/repositories/PerfilUserRepository"
import { PerfilUser } from "../../../domain/valueObjects/PerfilUser"
import { PerfilUserPro } from "../../../domain/valueObjects/PerfilUserPro"
import { PerfilUserModel } from "../../../domain/models/PerfilUserModel"
import { PerfilProfesionalModel } from "../../../domain/models/PerfilProfesionalModel"
import type { PartialExcept } from "../../../../../shared/domain/types"

import { MongoosePerfilUserModel } from "./Perfil"
import { MongoosePerfilUserProModel } from "./PerfilPro"

class MongoosePerfilUserRepository implements PerfilUserRepository {
  async savePerfilUser(perfil: PerfilUser): Promise<PerfilUser> {
    const newUser = new MongoosePerfilUserModel(perfil)
    const savedUser: PerfilUser = await newUser.save()

    const { id, address, image, name, phone, userId } = savedUser

    return new PerfilUser(id, name, image, userId, phone, address)
  }

  async savePerfilUserPro(perfil: PerfilUserPro): Promise<PerfilUserPro> {
    const newUser = new MongoosePerfilUserProModel(perfil)
    const savedUser: PerfilUserPro = await newUser.save()

    const { id, address, image, dni, name, phone, userId, titleCareer } =
      savedUser

    return new PerfilUserPro(
      id,
      name,
      dni,
      image,
      userId,
      phone,
      address,
      titleCareer,
    )
  }

  async getProfiles(idUser: string): Promise<any[] | null> {
    const profiles: any[] = []
    const dataStandar = await MongoosePerfilUserModel.findOne({
      userId: idUser,
    })
    const dataProfessional = await MongoosePerfilUserProModel.findOne({
      userId: idUser,
    })
    if (dataStandar) {
      const { id, address, image, name, phone, userId } = dataStandar
      const profileStandardfound = new PerfilUser(
        id,
        name,
        image,
        userId,
        phone,
        address,
      )
      profiles.push(profileStandardfound)
    }
    if (dataProfessional) {
      const { id, address, image, name, phone, userId, dni, titleCareer } =
        dataProfessional
      const profileProfessionalfound = new PerfilUserPro(
        id,
        name,
        dni,
        image,
        userId,
        phone,
        address,
        titleCareer,
      )
      profiles.push(profileProfessionalfound)
    }

    if (profiles.length == 0) return null
    return profiles
  }

  async findByProfileId(idProfile: string): Promise<PerfilUser | null> {
    const profileUser: PerfilUser | null =
      await MongoosePerfilUserModel.findOne({
        id: idProfile,
      })

    if (!profileUser) return null

    const { id, name, image, userId, phone, address } = profileUser
    return new PerfilUser(id, name, image, userId, phone, address)
  }

  async findByProfileProId(idProfile: string): Promise<PerfilUserPro | null> {
    const profileUserPro: PerfilUserPro | null =
      await MongoosePerfilUserProModel.findOne({
        id: idProfile,
      })

    if (!profileUserPro) return null

    const { id, name, dni, image, userId, phone, address, titleCareer } =
      profileUserPro
    return new PerfilUserPro(
      id,
      name,
      dni,
      image,
      userId,
      phone,
      address,
      titleCareer,
    )
  }

  async profileUserUpdateById (profile: PartialExcept<PerfilUserModel, "id">): Promise<PerfilUser | null> {
    const { id } = profile
    const newUser = await MongoosePerfilUserModel.findOneAndUpdate({ id }, profile, {
      new: true,
    })

    if (!newUser) {
      return null
    }

    const {name, image, userId, phone, address } = newUser

    return new PerfilUser(id, name, image, userId, phone, address)
  }

  async profileUserProUpdateById (profile: PartialExcept<PerfilProfesionalModel, "id">): Promise<PerfilUserPro | null> {
    const { id } = profile
    const newUser = await MongoosePerfilUserProModel.findOneAndUpdate({ id }, profile, {
      new: true,
    })

    if (!newUser) {
      return null
    }

    const {name, dni, image, userId, phone, address, titleCareer } = newUser

    return new PerfilUserPro(id, name, dni, image, userId, phone, address, titleCareer )
  }

}

export { MongoosePerfilUserRepository }
