import React, { useContext, useEffect, useState } from 'react';
import CardFactory from '../components/CardFactory';
import Header from '../components/Header';

import { UserContext } from '../context/userContext';
import { getFactoriesByUser } from '../services/api';

function Participation() {
  const [factories, setFactories] = useState();
  const { user: { usinas } } = useContext(UserContext);

  useEffect(() => {
    getFactoriesByUser(usinas, setFactories);
  }, [usinas]);

  return (
    <>
      <Header />
      { usinas.length === 0 ? <p>Sem percentual em Usinas</p> : <h1 className="title-pages">Usinas</h1> }
      { factories && factories
        .map((factory, index) => <CardFactory key={index} factory={factory} />) }
      
    </>
  );
}

export default Participation;