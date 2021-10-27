import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';

import Nav from '../Nav';
import Loading from '../Loading';

import './styles.css';
import { Link } from 'react-router-dom';
import { deleteLocalStorage } from '../../utils/helpers';

function Header() {
  const { user, setToken } = useContext(UserContext);

  const handleClick = () => {
    deleteLocalStorage('token');
    setToken('');
  };

  if (!user) {
    return <Loading />;
  }

  return (
    <header className="content-header">
      <Nav />
      <div className="content-user-logged">
        <p>{`Bem vindo(a) ${user.name}`}</p>
        <Link to="/login">
          <button onClick={handleClick}>Sair</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;