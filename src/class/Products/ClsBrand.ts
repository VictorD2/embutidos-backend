/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IBrand } from '@interfaces/Products/IBrand';
import { write } from '@lib/helpers';
import Brand from '@models/Products/brand.model';

class ClsBrand {
  private static brands = [
    { id: 1, name: 'ARGENTINA' },
    { id: 2, name: 'BALANCE' },
    { id: 3, name: 'BOLIVIA' },
    { id: 4, name: 'BOSTON FOODS' },
    { id: 5, name: 'BRAEDT' },
    { id: 6, name: 'BRASIL' },
    { id: 7, name: 'CANDIA' },
    { id: 8, name: 'CANTOREL' },
    { id: 9, name: 'DISTRIBUIDORA MASS' },
    { id: 10, name: 'ELLE&VIRE' },
    { id: 11, name: 'ENTREMONT' },
    { id: 12, name: 'G & O' },
    { id: 13, name: 'LA SEGOVIANA' },
    { id: 14, name: 'MAESE MIGUEL' },
    { id: 15, name: 'MERCI CHEF' },
    { id: 16, name: 'MILKUNZ' },
    { id: 17, name: 'MONTI TRENTINI' },
    { id: 18, name: 'OTTO KUNZ' },
    { id: 19, name: 'PHILADELPHIA' },
    { id: 20, name: 'ROCINANTE' },
    { id: 21, name: 'SFO' },
    { id: 22, name: 'SIGMA FOODSERVICE' },
    { id: 23, name: 'URUGAY' },
    { id: 24, name: 'USA' },
    { id: 25, name: 'WELCOME' },
  ];

  static async initValues() {
    try {
      for (let i = 0; i < ClsBrand.brands.length; i += 1) {
        const element = ClsBrand.brands[i];
        // eslint-disable-next-line no-await-in-loop
        await Brand.create(element);
      }
    } catch (error) {
      write('', 'green');
    }
  }

  static async getBrands(): Promise<IBrand[]> {
    const brands = await Brand.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } });
    return brands;
  }

  static async getBrandById(id: number): Promise<IBrand | undefined> {
    const brand = await Brand.findByPk(id, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (brand === null) return undefined;
    return brand;
  }

  static async createBrand(brand: IBrand): Promise<IBrand> {
    const { name } = brand;
    const newBrand = await Brand.create({ name });
    return newBrand;
  }

  static async updateBrand(id: number, brand: IBrand): Promise<IBrand | undefined> {
    const brandFound = await Brand.findByPk(id, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    if (brandFound === null) return undefined;
    await brandFound.update(brand);
    return brandFound;
  }
}

export default ClsBrand;
