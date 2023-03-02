import type { Service } from "../valueObjects/Service"

interface ServiceRepository {
  save: (oneService: Service) => Promise<Service>
  getServices: (id: string) => Promise<Service[] | null>
  getDetailService: (idService: string) => Promise<Service | null> 
  getServiceByCategories: (list: String []) => Promise<any[] | null> 
  allServices: () => Promise<Service[]>
}

export { type ServiceRepository }
