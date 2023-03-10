import type { CategoryModel } from "../models/CategoryModel"

class Category implements CategoryModel {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly description: string,
  ) {}
}

export { Category }
