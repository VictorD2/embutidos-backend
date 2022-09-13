import { Router } from 'express';
import { createProduct, editProduct, getProductById, getProducts } from '@controllers/Products/producto.controller';
import { getProductsSchema, createProductSchema, getProductSchema } from '@schemas/Products/producto.schema';
import { validatorHandler } from '@lib/helpers';
import { JWTAuth } from '@lib/auth.handler';

const router = Router();

router.get('/', JWTAuth, validatorHandler(getProductsSchema, 'query'), getProducts);
router.get('/:id', JWTAuth, validatorHandler(getProductSchema, 'params'), getProductById);
router.post('/', JWTAuth, validatorHandler(createProductSchema, 'body'), createProduct);
router.put(
  '/:id',
  JWTAuth,
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(createProductSchema, 'body'),
  editProduct
);
// router.get('/:id', getProductById);

export default router;
