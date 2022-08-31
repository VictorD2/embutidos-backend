import { IProduct } from '@interfaces/IProducto';
import Product, { ProductInput } from '@models/producto.model';

class ClsProducto {
  private static products: ProductInput[] = [
    {
      id: 23901,
      name: 'Salchicha segoviana 240 gr',
      price: 1.5,
      quantity: 4,
      photo: 'https://www.trujillomarket.pe/Assets/images/uploads/pro_1a93d807d5c668b8a7363be4d03bb511.jpg',
    },
    {
      id: 23392,
      name: 'Chorizo precocido 240 gr',
      price: 3.73,
      quantity: 2,
      photo: 'https://images.rappi.pe/products/18101-1540506458.png',
    },
    {
      id: 92849,
      name: 'Jamón de pollo 39 gr',
      price: 4.6,
      quantity: 0,
      photo: 'https://lacanastabrava.com/wp-content/uploads/2021/03/JAMON-PAVITA-LA-SEG.jpg',
    },
  ];

  static async initialProducts() {
    await Product.create(ClsProducto.products[0]);
    await Product.create(ClsProducto.products[1]);
    await Product.create(ClsProducto.products[2]);
  }

  static async getProducts(): Promise<IProduct[]> {
    const products = Product.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } });
    return products;
  }

  static async getProductById(id: number): Promise<IProduct | undefined> {
    console.log(id);
    return undefined;
  }
}

export default ClsProducto;
