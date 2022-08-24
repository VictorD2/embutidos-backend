/* eslint-disable @typescript-eslint/no-explicit-any */
import path from 'path';
import { Request, Response } from 'express';

const indexController = async (req: Request, res: Response) => {
  return res.sendFile(path.join(__dirname, '../build/public', 'index.html'));
};
export default indexController;
