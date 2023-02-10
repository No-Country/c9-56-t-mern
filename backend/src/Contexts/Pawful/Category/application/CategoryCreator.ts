import type { CategoryRepository } from "../domain/repositories/CategoryRepository"
import type { Category } from "../domain/valueObjects/Category"

class CategoryCreator {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async run(category: Category): Promise<Category> {
    return await this.categoryRepository.save(category)
  }
}

export { CategoryCreator }
