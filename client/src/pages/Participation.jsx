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

  const renderTitle = () => {
    if (usinas.length === 0) {
      return (
        <p>Sem percentual em Usinas</p>
      );
    }
    return (
      <h1 className="title-pages">Suas Participações em Usinas</h1> 
    );
  };

  return (
    <>
      <main className="main-participation">
        <Header />
        { renderTitle() }
        { factories && (
          <section className="content-factories">
            {factories.map((factory, index) => <CardFactory key={index} factory={factory} />)}
          </section>
        )}
      </main>
    </>
  );
}

export default Participation;