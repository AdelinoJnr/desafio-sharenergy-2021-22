const connection = require('./conncetion');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  const db = await connection();
  const factories = await db.collection('usinas').find().limit(10).toArray();
  return factories;
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  const factory = await db.collection('usinas').findOne({ _id: ObjectId(id) });
  return factory;
};

const createMany = async (data) => {
  const db = await connection();
  const factories = await db.collection('usinas').insertMany(data);
  return factories;
};

const getLimit = async (num) => {
  const db = await connection();
  const factories = await db.collection('usinas').find().skip(num).limit(10).toArray();
  return factories;
};

module.exports = {
  getAll,
  getById,
  createMany,
  getLimit,
};