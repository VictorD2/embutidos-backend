import { Model } from 'sequelize';

export interface IUnit {
  id: number;
  name: string;
}
export interface IUnitModel extends Model {
  id: number;
  name: string;
}
