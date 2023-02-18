import type { Service } from "../valueObjects/Service"

interface ServiceRepository {
  save: (oneService: Service) => Promise<Service>
  getServices: (id: string) => Promise<Service[] | null> 
}

export { type ServiceRepository }
