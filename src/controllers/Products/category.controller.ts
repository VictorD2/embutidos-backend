/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import boom from '@hapi/boom';
import ClsCategory from '@class/Products/ClsCategory';

export const getCategories = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = await ClsCategory.getCategories();
    return res.json({ success: 'Datos obtenido', categories });
  } catch (error: any) {
    return next(boom.badRequest(error.message));
  }
};

export const getCategoryById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const category = await ClsCategory.getCategoryById(parseInt(id, 10));
    if (!category) return next(boom.notFound('Esa categoria no existe'));
    return res.json({ success: 'Dato obtenido', category });
  } catch (error: any) {
    return next(boom.badRequest(error.message));
  }
};

export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newCategory = await ClsCategory.createCategory(req.body);
    return res.json({ success: 'Categoria creada', category: newCategory });
  } catch (error: any) {
    return next(boom.badRequest(error.message));
  }
};

export const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const newCategory = await ClsCategory.updateCategory(parseInt(id, 10), req.body);
    if (!newCategory) return next(boom.notFound('Esa categoria no existe'));
    return res.json({ success: 'Categoria Actualizada', category: newCategory });
  } catch (error: any) {
    return next(boom.badRequest(error.message));
  }
};
