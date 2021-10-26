import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';

import Nav from './Nav';

function Header() {
  const { user: { name } } = useContext(UserContext);

  return (
    <header>
      <Nav />
      <p>{name}</p>
    </header>
  );
}

export default Header;