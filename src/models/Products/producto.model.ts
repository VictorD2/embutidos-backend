import { DataTypes, Optional, Model, BuildOptions } from 'sequelize';
import { sequelize } from '@src/database';
import { IProduct, IProductModel } from '@interfaces/Products/IProducto';
import Brand from './brand.model';
import Category from './category.model';
import Store from './store.model';
import Unit from './unit.model';

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
  internCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  barCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  peso: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  priceCost: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  priceMayor: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  priceMinor: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  brand_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  store_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  unit_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Product.belongsTo(Brand, { foreignKey: 'brand_id', targetKey: 'id' });
Product.belongsTo(Category, { foreignKey: 'category_id', targetKey: 'id' });
Product.belongsTo(Store, { foreignKey: 'store_id', targetKey: 'id' });
Product.belongsTo(Unit, { foreignKey: 'unit_id', targetKey: 'id' });

export type ProductInput = Optional<IProduct, 'id'>;

export type ProductOutput = Required<IProduct>;

export default Product;
