import type { ServiceRepository } from "../domain/repositories/ServiceRepository"
import type { Service } from "../domain/valueObjects/Service"

class ServiceCreator {
  constructor(private readonly userRepository: ServiceRepository) {}

  async run(user: Service): Promise<Service> {

    return await this.userRepository.save(user)
  }
}

export { ServiceCreator }
