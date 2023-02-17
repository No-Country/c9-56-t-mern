import { CategoryNotFound } from "../domain/errors/CategoryNotFound"
import { CategoryRepository } from "../domain/repositories/CategoryRepository"

class CategoryDeleteOne {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async run(id: string): Promise<void> {
    const categoryFound = await this.categoryRepository.findById(id)

    if (!categoryFound) {
      throw new CategoryNotFound()
    }

    await this.categoryRepository.deleteOne(id)
  }
}

export { CategoryDeleteOne }
