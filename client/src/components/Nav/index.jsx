import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link to="/home">HOME</Link>
      <Link to="/participation">PARTICIPAÇÕES</Link>
      <Link to="/contacts">CONTATOS</Link>
    </nav>
  );
}

export default Nav;