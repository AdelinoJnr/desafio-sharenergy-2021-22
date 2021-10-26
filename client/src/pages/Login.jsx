import React, { useState } from 'react';
import Loading from '../components/Loading';

import { getUserByEmail } from '../services/api';

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEMail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState();

  const handleClick = async () => {
    setIsLoading(true);
    await getUserByEmail(email, setUser);
    if (!user) {
      setError('User nao encontrado!');
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <form>
        <h2>Login</h2>
        <input
          onChange={(ev) => setEMail(ev.target.value)}
          value={email}
          type="text"
          placeholder="E-mail"
        />
        <input
          onChange={(ev) => setPassword(ev.target.value)}
          value={password}
          type="password"
          placeholder="Senha"
        />
        <button onClick={handleClick} type="button">Entrar</button>
        {user}
        { error && <p>{error}</p> }
      </form>
    </>
  );
}

export default Login;