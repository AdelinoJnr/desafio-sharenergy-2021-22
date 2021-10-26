const Factory = require('../services/factorys');

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

module.exports = {
  getAll,
  getById,
};