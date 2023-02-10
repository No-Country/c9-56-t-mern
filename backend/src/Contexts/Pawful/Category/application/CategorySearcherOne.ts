import { CategoryNotFound } from "../domain/errors/CategoryNotFound"
import type { CategoryRepository } from "../domain/repositories/CategoryRepository"
import type { Category } from "../domain/valueObjects/Category"

class CategorySearcheOne {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async run(category: string): Promise<Category> {
    const categoryFound = await this.categoryRepository.findById(category)

    if (!categoryFound) {
      throw new CategoryNotFound()
    }

    return categoryFound;
  }
}

export { CategorySearcheOne }
