import type { PerfilProfesionalModel } from "../models/PerfilProfesionalModel"
class PerfilUserPro implements PerfilProfesionalModel {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly dni: number,
    readonly image: string,
    readonly userId: string,
    readonly phone: string,
    readonly address: string,
    readonly titleCareer: [],
  ) {}
}

export { PerfilUserPro }
