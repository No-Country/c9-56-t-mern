import { CategoryNotFound } from "../domain/errors/CategoryNotFound"
import { CategoryRepository } from "../domain/repositories/CategoryRepository"
import { Category } from "../domain/valueObjects/Category"

class CategorySearcheOne {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async run(category: string): Promise<Category> {
    const categoryFound = await this.categoryRepository.findById(category)

    if (!categoryFound) {
      throw new CategoryNotFound()
    }

    return categoryFound
  }
}

export { CategorySearcheOne }
