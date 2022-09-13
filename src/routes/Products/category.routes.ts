import { Router } from 'express';
import {
  createCategory,
  getCategoryById,
  getCategories,
  updateCategory,
} from '@controllers/Products/category.controller';
import { validatorHandler } from '@lib/helpers';
import { createCategorySchema, getCategoryByIdSchema, updateCategorySchema } from '@schemas/Products/category.schema';
import { checkRoles, JWTAuth } from '@lib/auth.handler';

const router = Router();

router.get('/', JWTAuth, checkRoles('Administrador'), getCategories);
router.get(
  '/:id',
  JWTAuth,
  checkRoles('Administrador'),
  validatorHandler(getCategoryByIdSchema, 'params'),
  getCategoryById
);
router.post('/', JWTAuth, checkRoles('Administrador'), validatorHandler(createCategorySchema, 'body'), createCategory);
router.put(
  '/:id',
  JWTAuth,
  checkRoles('Administrador'),
  validatorHandler(getCategoryByIdSchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  updateCategory
);

export default router;
