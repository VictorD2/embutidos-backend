/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import boom from '@hapi/boom';
import ClsUnit from '@class/Products/ClsUnit';

export const getUnits = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const units = await ClsUnit.getUnits();
    return res.json({ success: 'Datos obtenido', units });
  } catch (error: any) {
    return next(boom.badRequest(error.message));
  }
};

export const getUnitById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const unit = await ClsUnit.getUnitById(parseInt(id, 10));
    if (!unit) return next(boom.notFound('Esa unidad no existe'));
    return res.json({ success: 'Dato obtenido', unit });
  } catch (error: any) {
    return next(boom.badRequest(error.message));
  }
};

export const createUnit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newUnit = await ClsUnit.createUnit(req.body);
    return res.json({ success: 'Unidad creada', unit: newUnit });
  } catch (error: any) {
    return next(boom.badRequest(error.message));
  }
};

export const updateUnit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const newUnit = await ClsUnit.updateUnit(parseInt(id, 10), req.body);
    if (!newUnit) return next(boom.notFound('Esa unidad no existe'));
    return res.json({ success: 'Unidad Actualizada', unit: newUnit });
  } catch (error: any) {
    return next(boom.badRequest(error.message));
  }
};
