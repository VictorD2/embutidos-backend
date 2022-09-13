/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import boom from '@hapi/boom';
import ClsBrand from '@class/Products/ClsBrand';

export const getBrands = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const brands = await ClsBrand.getBrands();
    return res.json({ success: 'Datos obtenido', brands });
  } catch (error: any) {
    return next(boom.badRequest(error.message));
  }
};

export const getBrandById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const brand = await ClsBrand.getBrandById(parseInt(id, 10));
    if (!brand) return next(boom.notFound('Esa marca no existe'));
    return res.json({ success: 'Dato obtenido', brand });
  } catch (error: any) {
    return next(boom.badRequest(error.message));
  }
};

export const createBrand = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newBrand = await ClsBrand.createBrand(req.body);
    return res.json({ success: 'Marca creada', brand: newBrand });
  } catch (error: any) {
    return next(boom.badRequest(error.message));
  }
};

export const updateBrand = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const newBrand = await ClsBrand.updateBrand(parseInt(id, 10), req.body);
    if (!newBrand) return next(boom.notFound('Esa marca no existe'));
    return res.json({ success: 'Marca Actualizada', brand: newBrand });
  } catch (error: any) {
    return next(boom.badRequest(error.message));
  }
};
