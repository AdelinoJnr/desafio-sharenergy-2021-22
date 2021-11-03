import React, { useState } from 'react';
import { func } from 'prop-types';

import './styles.css';

function FormRegister({ handleClick }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form className="content-form-register">
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
      <button
        onClick={(ev) => handleClick(ev, name, email, password)}
        type="submit"
        className="btn"
      >
        Cadastrar
      </button>
    </form>
  );
}

FormRegister.propTypes = {
  handleClick: func.isRequired,
};

export default FormRegister;