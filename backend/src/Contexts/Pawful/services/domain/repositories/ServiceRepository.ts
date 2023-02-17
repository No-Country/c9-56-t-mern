import type { Service } from "../valueObjects/Service"

interface ServiceRepository {
  save: (oneService: Service) => Promise<Service>
}

export { type ServiceRepository }
