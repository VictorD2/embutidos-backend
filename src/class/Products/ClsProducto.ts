/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Op } from 'sequelize';
import { IProduct } from '@interfaces/Products/IProducto';
import Brand from '@models/Products/brand.model';
import Category from '@models/Products/category.model';
import Product from '@models/Products/producto.model';
import Store from '@models/Products/store.model';
import Unit from '@models/Products/unit.model';

class ClsProducto {
  static async getProducts(query: any): Promise<{ products: IProduct[]; quantity: number }> {
    const { limit, page, filter } = query;

    const limite = parseInt(limit, 10);
    const pagina = parseInt(page, 10);
    const filtro = filter as string;

    let products: IProduct[] = [];

    // Filter
    if (filtro !== '' && filtro !== undefined) {
      const quantity = await Product.count({
        where: {
          [Op.or]: [
            { name: { [Op.substring]: filtro } },
            { internCode: { [Op.substring]: filtro } },
            { barCode: { [Op.substring]: filtro } },
          ],
        },
      });
      products = await Product.findAll({
        include: [
          { model: Brand, attributes: ['id', 'name'] },
          { model: Category, attributes: ['id', 'name'] },
          { model: Unit, attributes: ['id', 'name'] },
          { model: Store, attributes: ['id', 'name'] },
        ],
        order: [['internCode', 'DESC']],
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        limit: pagina * limite,
        where: {
          [Op.or]: [
            { name: { [Op.substring]: filtro } },
            { internCode: { [Op.substring]: filtro } },
            { barCode: { [Op.substring]: filtro } },
          ],
        },
      });
      const newProducts: IProduct[] = quantity === 0 ? [] : JSON.parse(JSON.stringify(products));
      return { products: newProducts.splice((pagina - 1) * limit, limit), quantity };
    }

    // Without filter
    const quantity = await Product.count();
    products = await Product.findAll({
      include: [
        { model: Brand, attributes: ['id', 'name'] },
        { model: Category, attributes: ['id', 'name'] },
        { model: Unit, attributes: ['id', 'name'] },
        { model: Store, attributes: ['id', 'name'] },
      ],
      order: [['internCode', 'DESC']],
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      limit: pagina * limite,
    });
    const newProducts: IProduct[] = quantity === 0 ? [] : JSON.parse(JSON.stringify(products));
    return { products: newProducts.splice((pagina - 1) * limit, limit), quantity };
  }

  static async getProductById(id: number): Promise<IProduct | undefined> {
    const product = await Product.findByPk(id, {
      include: [
        { model: Brand, attributes: ['id', 'name'] },
        { model: Category, attributes: ['id', 'name'] },
        { model: Unit, attributes: ['id', 'name'] },
        { model: Store, attributes: ['id', 'name'] },
      ],
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (product === null) return undefined;
    return product;
  }

  static async createProduct(product: IProduct) {
    const {
      barCode,
      brand_id,
      category_id,
      internCode,
      name,
      stock,
      peso,
      priceCost,
      priceMayor,
      priceMinor,
      store_id,
      unit_id,
      photo,
    } = product;

    const newProduct = await Product.create({
      barCode,
      brand_id,
      category_id,
      internCode,
      name,
      stock,
      peso,
      priceCost,
      priceMayor,
      priceMinor,
      store_id,
      unit_id,
      photo,
    });

    const productFound = await Product.findByPk(newProduct.id, {
      include: [
        { model: Brand, attributes: ['id', 'name'] },
        { model: Category, attributes: ['id', 'name'] },
        { model: Unit, attributes: ['id', 'name'] },
        { model: Store, attributes: ['id', 'name'] },
      ],
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    return productFound;
  }

  static async updateProduct(id: number, product: IProduct) {
    const productFound = await Product.findByPk(id, {
      include: [
        { model: Brand, attributes: ['id', 'name'] },
        { model: Category, attributes: ['id', 'name'] },
        { model: Unit, attributes: ['id', 'name'] },
        { model: Store, attributes: ['id', 'name'] },
      ],
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    if (productFound === null) return undefined;
    await productFound.update(product);

    const productUpdated = await Product.findByPk(id, {
      include: [
        { model: Brand, attributes: ['id', 'name'] },
        { model: Category, attributes: ['id', 'name'] },
        { model: Unit, attributes: ['id', 'name'] },
        { model: Store, attributes: ['id', 'name'] },
      ],
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (product === null) return undefined;
    return productUpdated;
  }
  // static async deleteProduct() {}
}

export default ClsProducto;
