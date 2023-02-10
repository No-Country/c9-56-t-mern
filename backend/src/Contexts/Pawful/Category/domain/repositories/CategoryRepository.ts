import type { Category } from "../valueObjects/Category"

interface CategoryRepository {
  findById: (name: string) => Promise<Category | null>
}

export { type CategoryRepository }
