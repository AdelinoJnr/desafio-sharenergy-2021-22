// Estrutura Collection Users
const user = {
  name: 'Adelino Junior',
  email: 'adelinojunior@gmail.com',
  password: '123456',
  role: 'admin',
  usinas: [
    { usinaId: 1, percentualDeParticipacao: 50 }
  ]
};

const userMock = {
  name: 'Adelino Junior',
  email: 'adelinojunior@gmail.com',
  password: '123456',
  role: 'user'
};

// Variaveis de ambiente
const PORT = 3333;
const MONGO_DB_URL = 'mongodb://localhost:27017/sharenergy';
const DB_NAME = 'sharenergy';
const MESSAGE_INVALID_TOKEN = { message: 'Token invalid' };
const JWT_SECRET = 'minhasenhasecreta';
const JWT_CONFIG = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

module.exports = {
  PORT,
  MONGO_DB_URL,
  DB_NAME,
  userMock,
  user,
  JWT_CONFIG,
  JWT_SECRET,
  MESSAGE_INVALID_TOKEN
};