import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Nav() {
  return (
    <nav className="content-nav-header">
      <Link className="link-nav" to="/home">HOME</Link>
      <Link className="link-nav" to="/participation">PARTICIPAÇÕES</Link>
      <Link className="link-nav" to="/contacts">CONTATOS</Link>
    </nav>
  );
}

export default Nav;