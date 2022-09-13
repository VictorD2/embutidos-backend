import { DataTypes, Optional, Model, BuildOptions } from 'sequelize';
import { sequelize } from '@src/database';
import { IBrand, IBrandModel } from '@interfaces/Products/IBrand';

type ModeloBrand = typeof Model & {
  // eslint-disable-next-line no-unused-vars
  new (values?: object, options?: BuildOptions): IBrandModel;
};

const Brand = <ModeloBrand>sequelize.define('brand', {
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

export type BrandInput = Optional<IBrand, 'id'>;

export type BrandOutput = Required<IBrand>;

export default Brand;
