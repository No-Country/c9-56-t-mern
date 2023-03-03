import { ServiceDoesNotExistError } from "../domain/errors/ServiceDoesNotExistError"
import type { ServiceRepository } from "../domain/repositories/ServiceRepository"
import { Service } from "../domain/valueObjects/Service"

class ServiceAllShower {
  constructor(private readonly userRepository: ServiceRepository) {}

  async run(): Promise<Service[]> {
    const servicesFound = await this.userRepository.allServices()

    return servicesFound;
  }
}

export { ServiceAllShower }
