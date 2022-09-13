import { Router } from 'express';
import { createUnit, getUnitById, getUnits, updateUnit } from '@controllers/Products/unit.controller';
import { validatorHandler } from '@lib/helpers';
import { createUnitSchema, getUnitByIdSchema, updateUnitSchema } from '@schemas/Products/unit.schema';
import { checkRoles, JWTAuth } from '@lib/auth.handler';

const router = Router();

router.get('/', JWTAuth, checkRoles('Administrador'), getUnits);
router.get('/:id', JWTAuth, checkRoles('Administrador'), validatorHandler(getUnitByIdSchema, 'params'), getUnitById);
router.post('/', JWTAuth, checkRoles('Administrador'), validatorHandler(createUnitSchema, 'body'), createUnit);
router.put(
  '/:id',
  JWTAuth,
  checkRoles('Administrador'),
  validatorHandler(getUnitByIdSchema, 'params'),
  validatorHandler(updateUnitSchema, 'body'),
  updateUnit
);

export default router;
