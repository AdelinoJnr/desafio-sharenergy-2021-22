import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';

import Nav from '../Nav';
import Loading from '../Loading';

import './styles.css';

function Header() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Loading />;
  }

  return (
    <header className="content-header">
      <Nav />
      <div className="content-user-logged">
        <p>{`Bem vindo(a) ${user.name}`}</p>
        <button>Sair</button>
      </div>
    </header>
  );
}

export default Header;