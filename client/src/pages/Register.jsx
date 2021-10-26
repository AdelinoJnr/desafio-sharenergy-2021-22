import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { createUser } from '../services/api';

function Register() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [error, setError] = useState();

  const handleClick = async (ev) => {
    ev.preventDefault();
    const payload = { name, email, password, role: 'user' };
    await createUser(payload, setError);
  };

	return (
		<>
			<form>
        <h2>Cadastre-se</h2>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          placeholder="Digite seu nome"
        />
        <input
          type="text"
          id="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          placeholder="Digite seu email"
        />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          placeholder="Digite sua senha"
        />
        <button onClick={handleClick} type="submit">Cadastrar</button>
        { error && <p>{error}</p> }
        <Link to="/login">Login</Link>
      </form>
		</>
	);
}

export default Register;