import { Model } from 'sequelize';

export interface IProductModel extends Model {
  id: number;
  name: string;
  price: number;
  quantity: number;
  photo: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  photo: string;
}
