const User = require('../models/users');
const Schema = require('../utils/schemas');

const create = async (data) => {
  const { error } = Schema.createUser.validate(data);
  if (error) return { status: 400, message: 'Invalid Entries!' };

  const findUser = await User.findByEmail(data.email);
  if (findUser) return { status: 400, message: 'User already exist!' };

  await User.create(data);

  return { status: 201, data: 'Created Sucess!' };
};

const getAll = async () => {
  const users = await User.getAll();

  return { status: 200, data: users };
};

const getById = async (id) => {
  const user = await User.getById(id);
  if (!user) return { status: 404, message: 'User not found!' };

  return { status: 200, data: user };
};

const getByEmail = async (email) => {
  const user = await User.findByEmail(email);
  if (!user) return { status: 404, message: 'User not found!' };

  return { status: 200, data: user };
};

const update = async (id, data) => {
  const { error } = Schema.createUser.validate(data);
  if (error) return { status: 400, message: 'Invalid Entries!' };

  const user = await User.update(id, data);
  if (!user) return { status: 404, message: 'User not found!' };

  return { status: 200, data: user };
};

const remove = async (id) => {
  const findUser = User.getById(id);
  if (!findUser) return { status: 404, message: 'User not found!' };

  await User.remove(id);

  return { status: 204 };
};

module.exports = {
  create,
  getAll,
  getById,
  remove,
  update,
  getByEmail,
};