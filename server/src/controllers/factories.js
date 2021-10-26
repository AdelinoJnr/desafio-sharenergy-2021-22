const Factory = require('../services/factories');

const getAll = async (_req, res) => {
  const { status, data } = await Factory.getAll();

  res.status(status).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data, message } = await Factory.getById(id);
  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

const createMany = async (req, res) => {
  const { status, data } = await Factory.createMany(req.body);

  res.status(status).json(data);
};

const getLimit = async (req, res) => {
  const { num } = req.body;
  const { status, data } = await Factory.getLimit(num);

  res.status(status).json(data);
};

module.exports = {
  getAll,
  getById,
  createMany,
  getLimit,
};