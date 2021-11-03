import React, { useState } from 'react';
import { func } from 'prop-types';

import './styles.css';

function FormLogin({ handleClick }) {
  const [email, setEMail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className="content-form-login">
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
      <button
        className="btn"
        onClick={(ev) => handleClick(ev, email, password)}
        type="submit"
      >
        Entrar
      </button>
    </form>
  );
}

FormLogin.propTypes = {
  handleClick: func.isRequired,
};

export default FormLogin;