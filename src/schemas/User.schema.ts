import Joi from 'joi';

const id = Joi.number().required().positive().error(new Error("El campo 'id' es inv�lido"));
const name = Joi.string().required().error(new Error("El campo 'name' es requerido"));
const lastname = Joi.string().required().error(new Error("El campo 'lastname' es requerido"));
const email = Joi.string().email().required().error(new Error("El campo 'email' no tiene un formato adecuado"));
const password = Joi.string()
  .alphanum()
  .min(8)
  .required()
  .error(new Error("El campo 'password' debe tener m�nimo 8 caracteres"));
const status = Joi.boolean().required().error(new Error("El campo 'status' es requerido"));

export const loginUserSchema = Joi.object({
  email,
  password,
});

export const registerUserSchema = Joi.object({
  name,
  lastname,
  email,
  password,
});

export const updateUserSchema = Joi.object({
  name,
  lastname,
  email,
});

export const getUserSchema = Joi.object({
  id,
});

export const changeUserSchema = Joi.object({
  status,
});

export const changePasswordUserSchema = Joi.object({
  password,
});
