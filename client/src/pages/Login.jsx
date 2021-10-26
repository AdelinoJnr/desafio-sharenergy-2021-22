import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import { UserContext } from '../context/userContext';

import { userLogin } from '../services/api';

function Login() {
  const { setToken, token } = useContext(UserContext);

  const [email, setEMail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const checked = token ? true : false;


  const handleClick = async (ev) => {
    ev.preventDefault();
    const payload = { email, password };
    await userLogin(payload, setError, setToken);
  };

  if (checked) {
    return <Redirect to="/home" />;
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
          required
        />
        <input
          onChange={(ev) => setPassword(ev.target.value)}
          value={password}
          type="password"
          placeholder="Senha"
          required
        />
        <button onClick={handleClick} type="submit">Entrar</button>
        { error && <p>{error}</p> }
        <Link to="/register">Cadastrar</Link>
      </form>
    </>
  );
}

export default Login;