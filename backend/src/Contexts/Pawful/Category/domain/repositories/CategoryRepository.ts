import type { Category } from "../valueObjects/Category"

interface CategoryRepository {
  save: (category: Category) => Promise<Category>
  findById: (name: string) => Promise<Category | null>
  find: () => Promise<Category[] | null>
  deleteOne: (category: string) => Promise<void | null>
}

export { type CategoryRepository }
