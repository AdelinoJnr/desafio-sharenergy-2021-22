import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export const userLogin = async (payload, setUser, setError) => {
  try {
    const user = await api.post('api/login', payload);
    setUser(user.data);
  } catch (_e) {
    console.log('Deu Ruim');
    setError('Opss ...');
  }
};

export const createUser = async (payload, setError) => {
  try {
    const user = await api.post('api/users', payload);
    console.log(user);
  } catch (_e) {
    console.log('Deu Ruim');
    setError('Opss ...');
  }
};

export const getAllFactorys = async (setFactories, num) => {
  try {
    const factories = await api.post('api/factories/limit', { num });
    setFactories(factories.data);
  } catch (_e) {
    console.log('Deu Ruim!');
  }
};

export default api;