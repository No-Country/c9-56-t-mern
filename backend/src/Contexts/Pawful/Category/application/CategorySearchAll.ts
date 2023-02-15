import { CategoriesNotFound } from "../domain/errors/CategoriesNotFound"
import { CategoryRepository } from "../domain/repositories/CategoryRepository"
import { Category } from "../domain/valueObjects/Category"

class CategorySearchAll {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async run(): Promise<Category[]> {
    const categoriesFound = await this.categoryRepository.find()

    if (!categoriesFound) {
      throw new CategoriesNotFound()
    }
    return categoriesFound
  }
}

export { CategorySearchAll }
