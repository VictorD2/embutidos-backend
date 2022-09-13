import { DataTypes, Optional, Model, BuildOptions } from 'sequelize';
import { sequelize } from '@src/database';
import { ICategory, ICategoryModel } from '@interfaces/Products/ICategory';

type ModeloCategory = typeof Model & {
  // eslint-disable-next-line no-unused-vars
  new (values?: object, options?: BuildOptions): ICategoryModel;
};

const Category = <ModeloCategory>sequelize.define('category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export type CategoryInput = Optional<ICategory, 'id'>;

export type CategoryOutput = Required<ICategory>;

export default Category;
