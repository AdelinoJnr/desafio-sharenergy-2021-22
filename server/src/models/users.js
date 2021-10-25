const connection = require('./conncetion');
const { ObjectId } = require('mongodb');

const create = async (data) => {
  const db = await connection();
  const user = await db.collection('users').insertOne({ ...data });
  return { id: user.insertedId, ...data };
};

const getAll = async () => {
  const db = await connection();
  const users = await db.collection('users').find().toArray();
  return users;
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  const user = await db.collection('users').findOne({ _id: ObjectId(id) });
  return user;
};

const findByEmail = async (email) => {
  const db = await connection();
  const user = await db.collection('users').findOne({ email });
  return user;
};

const update = async (id, data) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  const user = await db.collection('users')
    .findOneAndUpdate({ _id: ObjectId(id) }, { $set: { ...data } });
  return { ...user.value, ...data };
};

const remove = async (id) => {
  const db = await connection();
  await db.collection('users').deleteOne({ _id: ObjectId(id) });
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
  findByEmail,
};