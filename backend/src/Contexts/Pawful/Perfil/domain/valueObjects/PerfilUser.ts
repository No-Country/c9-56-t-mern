import { Types } from "mongoose"
import type { PerfilUserModel } from "../models/PerfilUserModel"
class PerfilUser implements PerfilUserModel {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly lastname: string,
    readonly image: string,
    readonly userId: Types.ObjectId,
    readonly phone: string,
    readonly address: string
  ) {}
}


export { PerfilUser }
