import { Model } from 'sequelize';

export interface ICategory {
  id: number;
  name: string;
}
export interface ICategoryModel extends Model {
  id: number;
  name: string;
}
