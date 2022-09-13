import { Router } from 'express';
import { createBrand, getBrandById, getBrands, updateBrand } from '@controllers/Products/brand.controller';
import { validatorHandler } from '@lib/helpers';
import { createBrandSchema, getBrandByIdSchema, updateBrandSchema } from '@schemas/Products/brand.schema';
import { checkRoles, JWTAuth } from '@lib/auth.handler';

const router = Router();

router.get('/', JWTAuth, checkRoles('Administrador'), getBrands);
router.get('/:id', JWTAuth, checkRoles('Administrador'), validatorHandler(getBrandByIdSchema, 'params'), getBrandById);
router.post('/', JWTAuth, checkRoles('Administrador'), validatorHandler(createBrandSchema, 'body'), createBrand);
router.put(
  '/:id',
  JWTAuth,
  checkRoles('Administrador'),
  validatorHandler(getBrandByIdSchema, 'params'),
  validatorHandler(updateBrandSchema, 'body'),
  updateBrand
);

export default router;
