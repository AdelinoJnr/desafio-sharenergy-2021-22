import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export const getUserByEmail = async (payload, setUser, setError) => {
  try {
    const user = await api.post('api/login', payload);
    setUser(user.data);
  } catch (_e) {
    console.log('Deu Ruim');
    setError('Opss ...');
  }
};

export default api;