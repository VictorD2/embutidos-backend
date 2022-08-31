import { DataTypes, Optional, Model, BuildOptions } from 'sequelize';
import { sequelize } from '@src/database';
import { IProduct, IProductModel } from '@interfaces/IProducto';

type ModeloProduct = typeof Model & {
  // eslint-disable-next-line no-unused-vars
  new (values?: object, options?: BuildOptions): IProductModel;
};

const Product = <ModeloProduct>sequelize.define('product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export type ProductInput = Optional<IProduct, 'id'>;

export type ProductOutput = Required<IProduct>;

export default Product;
