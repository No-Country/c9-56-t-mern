import type { Category } from "../valueObjects/Category"

interface CategoryRepository {
  save: (category: Category) => Promise<Category>
  findById: (name: string) => Promise<Category | null>
  find: () => Promise<Category[] | null>
}

export { type CategoryRepository }
