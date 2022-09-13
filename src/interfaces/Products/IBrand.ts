import { Model } from 'sequelize';

export interface IBrand {
  id: number;
  name: string;
}
export interface IBrandModel extends Model {
  id: number;
  name: string;
}
