import { Model } from 'sequelize';

export interface IStore {
  id: number;
  name: string;
}
export interface IStoreModel extends Model {
  id: number;
  name: string;
}
