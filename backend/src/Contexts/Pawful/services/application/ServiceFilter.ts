import { ServiceNotFound } from "../domain/errors/ServiceNotFound"
import type { ServiceRepository } from "../domain/repositories/ServiceRepository"
import { Service } from "../domain/valueObjects/Service"

class ServiceFilter {
  constructor(private readonly userRepository: ServiceRepository) {}

  async run(list: String[]): Promise<any []> {
    const servicesFound = await this.userRepository.getServiceByCategories(list)

    if (!servicesFound) {
      throw new ServiceNotFound()
    }


    return servicesFound;
  }
}

export { ServiceFilter }
