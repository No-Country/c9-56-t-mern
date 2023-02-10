import type { CategoryRepository } from "../../../domain/repositories/CategoryRepository"
import { Category } from "../../../domain/valueObjects/Category"

import { Category as MongooseCategoryModel } from "./Category"

class MongooseCategoryRepository implements CategoryRepository {

  async findById(cat: string): Promise<Category | null> {
    const category: Category | null = await MongooseCategoryModel.findById({_id: cat })

    if (!category) {
      return null
    }

    const { id, name, description } = category

    return new Category(id, name, description)
  }
}

export { MongooseCategoryRepository }
