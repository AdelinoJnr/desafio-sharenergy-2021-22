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

module.exports = {
  getAll,
  getById,
};