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

module.exports = {
  PORT,
  MONGO_DB_URL,
  DB_NAME,
  userMock,
};