/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import boom from '@hapi/boom';
import ClsStore from '@class/Products/ClsStore';

export const getStores = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const stores = await ClsStore.getStores();
    return res.json({ success: 'Datos obtenido', stores });
  } catch (error: any) {
    return next(boom.badRequest(error.message));
  }
};

export const getStoreById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const store = await ClsStore.getStoreById(parseInt(id, 10));
    if (!store) return next(boom.notFound('Esa tienda no existe'));
    return res.json({ success: 'Dato obtenido', store });
  } catch (error: any) {
    return next(boom.badRequest(error.message));
  }
};

export const createStore = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newStore = await ClsStore.createStore(req.body);
    return res.json({ success: 'Tienda creada', store: newStore });
  } catch (error: any) {
    return next(boom.badRequest(error.message));
  }
};

export const updateStore = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const newStore = await ClsStore.updateStore(parseInt(id, 10), req.body);
    if (!newStore) return next(boom.notFound('Esa tienda no existe'));
    return res.json({ success: 'Tienda Actualizada', store: newStore });
  } catch (error: any) {
    return next(boom.badRequest(error.message));
  }
};
