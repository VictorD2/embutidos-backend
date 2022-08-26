import { Model } from 'sequelize';
import { IRol, IRolModel } from './IRol';

export interface IUserModel extends Model {
  id: number;
  name: string;
  email: string;
  password: string;
  status: boolean | number;
  ruc:string;
  address?:string;
  phone?:string;
  rol_id: number;
  rol: IRolModel;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  ruc:string;
  address?:string;
  phone?:string;
  password?: string;
  status: boolean | number;
  rol_id: number;
  rol?: IRol;
}
