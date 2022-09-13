import { DataTypes, Optional, Model, BuildOptions } from 'sequelize';
import { sequelize } from '@src/database';
import { IStore, IStoreModel } from '@interfaces/Products/IStore';

type ModeloStore = typeof Model & {
  // eslint-disable-next-line no-unused-vars
  new (values?: object, options?: BuildOptions): IStoreModel;
};

const Store = <ModeloStore>sequelize.define('store', {
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

export type StoreInput = Optional<IStore, 'id'>;

export type StoreOutput = Required<IStore>;

export default Store;
