import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import FormLogin from '../components/FormLogin';
import { UserContext } from '../context/userContext';

import { userLogin } from '../services/api';

import './styles.css';

function Login() {
  const { setToken, token } = useContext(UserContext);

  const [error, setError] = useState();
  const checked = token ? true : false;


  const handleClick = async (ev, email, password) => {
    ev.preventDefault();
    const payload = { email, password };
    await userLogin(payload, setError, setToken);
  };

  const renderError = () => {
    return (
      <div className="content-error">
        <p>{error}</p>
      </div>
    );
  };

  if (checked) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <main className="main-login">
        <h2 className="title-pages">Login</h2>
        <FormLogin handleClick={handleClick} />
        { error && renderError() }
        <div className="content-link-register">
          <span>Ainda nao possui cadastro? <Link to="/register">Cadastre-se</Link> </span>
        </div>
      </main>
    </>
  );
}

export default Login;