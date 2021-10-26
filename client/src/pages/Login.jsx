import React, { useState } from 'react';
import Loading from '../components/Loading';

function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <form>
        <h2>Login</h2>
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button onClick={handleClick} type="button">Entrar</button>
      </form>
    </>
  );
}

export default Login;