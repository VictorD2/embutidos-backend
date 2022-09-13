import { Model } from 'sequelize';
import { IBrand } from './IBrand';
import { ICategory } from './ICategory';
import { IStore } from './IStore';
import { IUnit } from './IUnit';

export interface IProductModel extends Model {
  id: number;
  name: string;
  internCode: string;
  barCode: string;
  peso: number;
  priceCost: number;
  stock: number;
  priceMayor: number;
  priceMinor: number;
  brand_id: number;
  category_id: number;
  store_id: number;
  unit_id: number;
  brand: IBrand;
  category: ICategory;
  unit: IUnit;
  store: IStore;
  photo: string;
}

export interface IProduct {
  id: number;
  name: string;
  internCode: string;
  barCode: string;
  peso: number;
  priceCost: number;
  stock: number;
  priceMayor: number;
  priceMinor: number;
  brand_id: number;
  category_id: number;
  store_id: number;
  unit_id: number;
  brand: IBrand;
  category: ICategory;
  unit: IUnit;
  store: IStore;
  photo: string;
}
