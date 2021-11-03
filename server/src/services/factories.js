const Factory = require('../models/factories');

const getAll = async () => {
  const factories = await Factory.getAll();

  return { status: 200, data: factories };
};

const getById = async (id) => {
  const factory = await Factory.getById(id);
  if (!factory) return { status: 404, message: 'Factory not fount!' };

  return { status: 200, data: factory };
};

const createMany = async (data) => {
  await Factory.createMany(data);

  return { status: 201, data: { message: 'Created sucess!' } };
};

const getLimit = async (num) => {
  const factories = await Factory.getLimit(num);

  return { status: 200, data: factories };
};

module.exports = {
  getAll,
  getById,
  createMany,
  getLimit,
};