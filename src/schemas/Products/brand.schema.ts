import Joi from 'joi';

const name = Joi.string().required().messages({ 'any.required': "El campo 'name' es requerido" });
const id = Joi.number().required().error(new Error(`El campo 'id' no tiene un formato adecuado`));

export const getBrandByIdSchema = Joi.object({
  id,
});
export const createBrandSchema = Joi.object({
  name,
});
export const updateBrandSchema = Joi.object({
  name,
});
