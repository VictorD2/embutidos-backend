import Joi from 'joi';

const id = Joi.number().required().positive().messages({
  'any.required': "El campo 'id' es requerido.",
  'number.base': 'El id debe ser un número.',
  'number.positive': 'El id es inválido.',
});

const name = Joi.string().required().messages({
  'any.required': "El campo 'name' es requerido.",
});

const lastname = Joi.string().required().messages({
  'any.required': "El campo 'lastname' es requerido.",
});

const email = Joi.string().required().email().messages({
  'any.required': "El campo 'email' es requerido.",
  'string.email': 'El campo email tiene un formato inválido.',
});

const password = Joi.string().min(8).required().messages({
  'any.required': "El campo 'password' es requerido.",
  'string.min': 'La contraseña debe tener mínimo 8 caracteres.',
});

const status = Joi.boolean().required().messages({
  'any.required': "El campo 'status' es requerido.",
  'boolean.base': 'El campo status deber ser un valor booleano.',
});

export const loginUserSchema = Joi.object({
  email,
  password,
}).options({ abortEarly: true });

export const registerUserSchema = Joi.object({
  name,
  lastname,
  email,
  password,
}).options({ abortEarly: true });

export const updateUserSchema = Joi.object({
  name,
  lastname,
  email,
}).options({ abortEarly: true });

export const getUserSchema = Joi.object({
  id,
}).options({ abortEarly: true });

export const changeUserSchema = Joi.object({
  status,
}).options({ abortEarly: true });

export const changePasswordUserSchema = Joi.object({
  password,
}).options({ abortEarly: true });
