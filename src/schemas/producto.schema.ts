import Joi from 'joi';

const id = Joi.number().required().messages({
  'any.required': "El campo 'id' es requerido.",
  'number.base': 'El campo id es inválido',
});

export const createProductSchema = Joi.object({
  id,
});

export const getProductSchema = Joi.object({
  id,
});
