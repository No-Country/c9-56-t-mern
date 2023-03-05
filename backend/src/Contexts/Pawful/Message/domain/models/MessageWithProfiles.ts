import { PerfilProfesionalModel } from "../../../Perfil/domain/models/PerfilProfesionalModel"
import { PerfilUserModel } from "../../../Perfil/domain/models/PerfilUserModel"
import { MessageModel } from "./MessageModel"

interface MessageWithProfilesModel
  extends Omit<MessageModel, "senderId" | "receiverId"> {
  sender: PerfilProfesionalModel | PerfilUserModel
  receiver: PerfilProfesionalModel | PerfilUserModel
}

export { type MessageWithProfilesModel }
