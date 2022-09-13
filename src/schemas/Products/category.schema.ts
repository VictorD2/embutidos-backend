import Joi from 'joi';

const name = Joi.string().required().messages({ 'any.required': "El campo 'name' es requerido" });
const id = Joi.number().required().error(new Error(`El campo 'id' no tiene un formato adecuado`));

export const getCategoryByIdSchema = Joi.object({
  id,
});
export const createCategorySchema = Joi.object({
  name,
});
export const updateCategorySchema = Joi.object({
  name,
});
