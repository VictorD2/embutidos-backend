import { DataTypes, Optional, Model, BuildOptions } from 'sequelize';
import { sequelize } from '@src/database';
import { IUnit, IUnitModel } from '@interfaces/Products/IUnit';

type ModeloUnit = typeof Model & {
  // eslint-disable-next-line no-unused-vars
  new (values?: object, options?: BuildOptions): IUnitModel;
};

const Unit = <ModeloUnit>sequelize.define('unit', {
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

export type UnitInput = Optional<IUnit, 'id'>;

export type UnitOutput = Required<IUnit>;

export default Unit;
