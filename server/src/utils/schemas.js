const Joi = require('joi');

const createUser = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  role: Joi.string().required(),
});

const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const updateFactories = Joi.object({
  usinaId: Joi.string().required(),
  percentual: Joi.number().required(),
});

module.exports = {
  createUser,
  login,
  updateFactories,
};