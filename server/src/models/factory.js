const connection = require('./conncetion');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  const db = await connection();
  const factorys = await db.collection('usinas').find().toArray();
  return factorys;
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  const factory = await db.collection('usinas').findOne({ _id: ObjectId(id) });
  return factory;
};

module.exports = {
  getAll,
  getById,
};