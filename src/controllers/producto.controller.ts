/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import boom from '@hapi/boom';
import ClsProducto from '@class/ClsProducto';

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await ClsProducto.getProducts();
    return res.json({ success: 'Datos obtenidos', products });
  } catch (error: any) {
    return next(boom.internal(error.message));
  }
};

export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.json({ success: 'Dato obtenido', products: {} });
  } catch (error: any) {
    return next(boom.internal(error.message));
  }
};
