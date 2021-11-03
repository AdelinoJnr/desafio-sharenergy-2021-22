import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export const userLogin = async (payload, setError, setToken) => {
  try {
    const user = await api.post('api/login', payload);
    setToken(user.data.token);
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

export const getFactoryById = async (id, setFactory) => {
  try {
    const factory = await api.get(`api/factories/${id}`);
    setFactory(factory.data);
  } catch (_e) {
    console.log('Deu Ruim!');
  }
};

export const userByToken = async (token, setUser) => {
  try {
    const user = await api.get('api/users/logged', { headers: { Authorization: token } });
    setUser(user.data);
  } catch (_e) {
    console.log('Deu Ruim!');
  }
};

export const getFactoriesByUser = async (factories, setFactories) => {
  try {
    const request = factories.map(async ({ usinaId }) => {
      const factory = await api.get(`api/factories/${usinaId}`);
      return factory.data;
    });
    const result = await Promise.all(request);
    setFactories(result);
  } catch (_e) {
    console.log('Deu Ruim!');
  }
};

export const updateFactoriesUser = async (id, payload, token) => {
  try {
    const header = { headers: { Authorization: token } };
    const user = await api.put(`api/users/factories/${id}`, payload, header);
    console.log(user);
  } catch (_e) {
    console.log('Deu Ruim!');
  }
};

export default api;