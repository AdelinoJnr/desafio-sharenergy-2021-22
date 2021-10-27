import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';

import Nav from './Nav';
import Loading from './Loading';

function Header() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Loading />;
  }

  return (
    <header>
      <Nav />
      <p>{user.name}</p>
    </header>
  );
}

export default Header;