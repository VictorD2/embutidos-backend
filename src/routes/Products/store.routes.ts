import { Router } from 'express';
import { createStore, getStoreById, getStores, updateStore } from '@controllers/Products/store.controller';
import { validatorHandler } from '@lib/helpers';
import { createStoreSchema, getStoreByIdSchema, updateStoreSchema } from '@schemas/Products/store.schema';
import { checkRoles, JWTAuth } from '@lib/auth.handler';

const router = Router();

router.get('/', JWTAuth, checkRoles('Administrador'), getStores);
router.get('/:id', JWTAuth, checkRoles('Administrador'), validatorHandler(getStoreByIdSchema, 'params'), getStoreById);
router.post('/', JWTAuth, checkRoles('Administrador'), validatorHandler(createStoreSchema, 'body'), createStore);
router.put(
  '/:id',
  JWTAuth,
  checkRoles('Administrador'),
  validatorHandler(getStoreByIdSchema, 'params'),
  validatorHandler(updateStoreSchema, 'body'),
  updateStore
);

export default router;
