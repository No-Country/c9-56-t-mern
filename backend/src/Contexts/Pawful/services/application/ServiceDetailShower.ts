import { ServiceNotFound } from "../domain/errors/ServiceNotFound"
import type { ServiceRepository } from "../domain/repositories/ServiceRepository"
import { Service } from "../domain/valueObjects/Service"

class ServiceDetailShower {
  constructor(private readonly userRepository: ServiceRepository) {}

  async run(idService: string): Promise<Service> {
    const serviceFound = await this.userRepository.getDetailService(idService)

    if (!serviceFound) {
      throw new ServiceNotFound()
    }


    return serviceFound;
  }
}

export { ServiceDetailShower }
