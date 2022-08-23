/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import path from 'path';
import boom from '@hapi/boom';

const indexController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.sendFile(path.join(__dirname, '../build/public', 'index.html'));
  } catch (error: any) {
    return next(boom.internal(error.message));
  }
};
export default indexController;
