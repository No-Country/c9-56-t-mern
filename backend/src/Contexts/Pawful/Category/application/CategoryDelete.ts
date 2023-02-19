import { CategoryRepository } from "../domain/repositories/CategoryRepository"

class CategoryDeleteOne {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async run(id: string): Promise<void> {
    await this.categoryRepository.deleteOne(id)
  }
}

export { CategoryDeleteOne }
