import type { ServiceModel } from "../models/ServiceModel"

class Service implements ServiceModel {
  constructor(
    readonly id: string,
    readonly presentacionPersonal: string,
    readonly presentacion_del_servicio: string,
    readonly profileId: string,
    readonly categoryId: string
  ) {}
}

export { Service }
