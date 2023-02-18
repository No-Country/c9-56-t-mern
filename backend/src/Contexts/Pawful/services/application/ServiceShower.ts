import { ServiceDoesNotExistError } from "../domain/errors/ServiceDoesNotExistError"
import type { ServiceRepository } from "../domain/repositories/ServiceRepository"
import { Service } from "../domain/valueObjects/Service"

class ServiceShower {
  constructor(private readonly userRepository: ServiceRepository) {}

  async run(id: string): Promise<Service[]> {
    const servicesFound = await this.userRepository.getServices(id)

    if (!servicesFound) {
      throw new ServiceDoesNotExistError()
    }


    return servicesFound;
  }
}

export { ServiceShower }
