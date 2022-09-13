import { ICategory } from '@interfaces/Products/ICategory';
import { write } from '@lib/helpers';
import Category from '@models/Products/category.model';

class ClsCategory {
  private static categories = [
    { id: 1, name: 'CARNE' },
    { id: 2, name: 'EMBUTIDO' },
    { id: 3, name: 'EMBUTIDO+LACTEO' },
    { id: 4, name: 'LACTEO' },
  ];

  static async initValues() {
    try {
      for (let i = 0; i < ClsCategory.categories.length; i += 1) {
        const element = ClsCategory.categories[i];
        // eslint-disable-next-line no-await-in-loop
        await Category.create(element);
      }
    } catch (error) {
      write('', 'green');
    }
  }

  static async getCategories(): Promise<ICategory[]> {
    const categories = await Category.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } });
    return categories;
  }

  static async getCategoryById(id: number): Promise<ICategory | undefined> {
    const category = await Category.findByPk(id, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (category === null) return undefined;
    return category;
  }

  static async createCategory(category: ICategory): Promise<ICategory> {
    const { name } = category;
    const newCategory = await Category.create({ name });
    return newCategory;
  }

  static async updateCategory(id: number, category: ICategory): Promise<ICategory | undefined> {
    const categoryFound = await Category.findByPk(id, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    if (categoryFound === null) return undefined;
    await categoryFound.update(category);
    return categoryFound;
  }
}

export default ClsCategory;
