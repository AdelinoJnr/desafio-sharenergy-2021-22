const User = require('../services/users');

const create = async (req, res) => {
  const { status, data, message } = await User.create(req.body);
  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

const getAll = async (_req, res) => {
  const { status, data } = await User.getAll();

  res.status(status).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data, message } = await User.getById(id);
  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { status, data, message } = await User.update(id, req.body);
  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await User.remove(id);
  if (message) return res.status(status).json({ message });

  res.status(status).send();
};

module.exports = {
  create,
  getAll,
  getById,
  remove,
  update,
};