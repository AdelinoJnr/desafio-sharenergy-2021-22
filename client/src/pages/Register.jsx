import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormRegister from '../components/FormRegister';

import { createUser } from '../services/api';

import './styles.css';

function Register() {
  const [error, setError] = useState();

  const handleClick = async (ev, name, email, password) => {
    ev.preventDefault();
    const payload = { name, email, password, role: 'user' };
    await createUser(payload, setError);
  };

  const renderError = () => {
    return (
      <div className="content-error">
        <p>{error}</p>
      </div>
    );
  };

	return (
		<>
      <main className="main-register">
        <h2 className="title-pages">Cadastre-se</h2>
        <FormRegister handleClick={handleClick} />
        { error && renderError() }
        <div className="content-link-login">
          <span>Ja possui cadastro? <Link to="/login">Login</Link> </span>
        </div>
      </main>
		</>
	);
}

export default Register;