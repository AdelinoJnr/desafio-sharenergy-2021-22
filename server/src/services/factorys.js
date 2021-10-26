const Factory = require('../models/factorys');

const getAll = async () => {
  const factorys = await Factory.getAll();

  return { status: 200, data: factorys };
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