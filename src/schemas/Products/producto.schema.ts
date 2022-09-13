/* eslint-disable camelcase */
import Joi from 'joi';

const id = Joi.number().required().messages({
  'any.required': "El campo 'id' es requerido.",
  'number.base': 'El campo id es inválido',
});

const page = Joi.number().required().messages({
  'number.base': 'El campo page es inválido',
  'any.required': 'El campo page es requerido.',
});

const limit = Joi.number().required().messages({
  'number.base': 'El campo limit es inválido',
  'any.required': 'El campo limit es requerido.',
});

const filter = Joi.string().optional().min(3).messages({
  'string.base': 'El campo filter es inválido',
  'any.required': 'El campo filter es requerido.',
  'string.min': 'El campo debe ser de mínimo 3 caracteres',
  'string.empty': 'El campo no puede estar vácio',
});

const name = Joi.string().required().messages({
  'string.base': 'El campo name es inválido',
  'any.required': 'El campo name es requerido.',
  'string.empty': 'El campo name no puede estar vácio',
});

const internCode = Joi.string().required().messages({
  'string.base': 'El campo internCode es inválido',
  'any.required': 'El campo internCode es requerido.',
  'string.empty': 'El campo internCode no puede estar vácio',
});

const barCode = Joi.string().required().messages({
  'string.base': 'El campo barCode es inválido',
  'any.required': 'El campo barCode es requerido.',
  'string.empty': 'El campo barCode no puede estar vácio',
});

const photo = Joi.string().optional().uri().messages({
  'string.base': 'El campo photo es inválido',
  'any.required': 'El campo photo es requerido.',
  'string.uri': 'El campo photo debe ser una url',
});

const peso = Joi.number().required().messages({
  'any.required': "El campo 'peso' es requerido.",
  'number.base': 'El campo peso es inválido',
});

const priceCost = Joi.number().required().messages({
  'any.required': "El campo 'priceCost' es requerido.",
  'number.base': 'El campo priceCost es inválido',
});

const stock = Joi.number().required().messages({
  'any.required': "El campo 'stock' es requerido.",
  'number.base': 'El campo stock es inválido',
});

const priceMayor = Joi.number().required().messages({
  'any.required': "El campo 'priceMayor' es requerido.",
  'number.base': 'El campo priceMayor es inválido',
});

const priceMinor = Joi.number().required().messages({
  'any.required': "El campo 'priceMinor' es requerido.",
  'number.base': 'El campo priceMinor es inválido',
});

const brand_id = Joi.number().required().messages({
  'any.required': "El campo 'brand_id' es requerido.",
  'number.base': 'El campo brand_id es inválido',
});

const category_id = Joi.number().required().messages({
  'any.required': "El campo 'category_id' es requerido.",
  'number.base': 'El campo category_id es inválido',
});

const store_id = Joi.number().required().messages({
  'any.required': "El campo 'store_id' es requerido.",
  'number.base': 'El campo store_id es inválido',
});

const unit_id = Joi.number().required().messages({
  'any.required': "El campo 'unit_id' es requerido.",
  'number.base': 'El campo unit_id es inválido',
});

export const createProductSchema = Joi.object({
  name,
  internCode,
  barCode,
  peso,
  priceCost,
  stock,
  priceMayor,
  priceMinor,
  photo,
  brand_id,
  category_id,
  store_id,
  unit_id,
}).options({ abortEarly: true });

export const getProductSchema = Joi.object({
  id,
}).options({ abortEarly: true });

export const getProductsSchema = Joi.object({
  page,
  limit,
  filter,
}).options({ abortEarly: true });
