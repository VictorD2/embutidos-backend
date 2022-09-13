/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import boom from '@hapi/boom';
import ClsProducto from '@class/Products/ClsProducto';

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { products, quantity } = await ClsProducto.getProducts(req.query);
    return res.json({ success: 'Datos obtenidos', products, quantity });
  } catch (error: any) {
    return next(boom.internal(error.message));
  }
};

export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const product = await ClsProducto.getProductById(parseInt(id, 10));
    if (!product) return next(boom.notFound('Ese producto no existe'));
    return res.json({ success: 'Dato obtenido', product });
  } catch (error: any) {
    return next(boom.internal(error.message));
  }
};

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await ClsProducto.createProduct(req.body);
    return res.json({ success: 'Producto creado', product });
  } catch (error: any) {
    return next(boom.internal(error.message));
  }
};

export const editProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const product = await ClsProducto.updateProduct(parseInt(id, 10), req.body);
    if (!product) return next(boom.notFound('Ese producto no existe'));
    return res.json({ success: 'Producto actualizado', product });
  } catch (error: any) {
    return next(boom.internal(error.message));
  }
};
