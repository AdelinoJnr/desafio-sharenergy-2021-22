import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export const getUserByEmail = async (email, setUser) => {
  try {
    const user = await api.get(`api/users/search?q=${email}`);
    console.log(user);
    setUser(user.data);
  } catch (_e) {
    console.log('Deu Ruim');
  }
};

export default api;