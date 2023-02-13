import { Types } from "mongoose"
interface PerfilUserModel {
  id: string
  name: string
  lastname: string
  image: string
  userId: Types.ObjectId
  phone: string
  address: string
}

export { type PerfilUserModel }
