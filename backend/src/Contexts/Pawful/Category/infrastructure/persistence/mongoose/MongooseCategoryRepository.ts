import type { CategoryRepository } from "../../../domain/repositories/CategoryRepository"
import { Category } from "../../../domain/valueObjects/Category"
import { MongooseCategoryModel } from "./MongooseCategoryModel"

class MongooseCategoryRepository implements CategoryRepository {
  async save(category: Category): Promise<Category> {
    const newCategory = new MongooseCategoryModel(category)
    const savedCategory: Category = await newCategory.save()

    const { id, name, description } = savedCategory
    return new Category(id, name, description)
  }

  async findById(cat: string): Promise<Category | null> {
    const category: Category | null = await MongooseCategoryModel.findById({
      _id: cat,
    })

    if (!category) {
      return null
    }

    const { id, name, description } = category

    return new Category(id, name, description)
  }
}

export { MongooseCategoryRepository }
