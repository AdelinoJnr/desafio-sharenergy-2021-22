import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import Factories from '../components/Factories';

import Header from '../components/Header';
import { UserContext } from '../context/userContext';
import { getAllFactorys } from '../services/api';
import { checkedToken } from '../utils/helpers';

function Home() {
  const { token } = useContext(UserContext);
  const [factories, setFactories] = useState();
  const [skip, setSkip] = useState(0);
  const [noToken, setNoToken] = useState(false);

  useEffect(() => {
    getAllFactorys(setFactories, Number(skip));
  }, [skip]);

  useEffect(() => {
    checkedToken(token, setNoToken);
  }, []);

  if (noToken) {
    return (
      <Redirect to="/login" />
    );
  }

  return (
    <>
      <main className="main-home">
        <Header />
        <h2 className="title-pages" >Usinas Fotovoltaicas</h2>
        { factories && <Factories factories={factories} /> }
        <div>
          <button
            className="btn-arrow"
            disabled={skip === 0}
            onClick={() => setSkip(skip - 10)}
          >
            Anterior
          </button>
          <button
            disabled={factories ? factories.length < 10 : false}
            className="btn-arrow"
            onClick={() => setSkip(skip + 10)}
          >
            Proximo
          </button>
        </div>
      </main>
    </>
  );
}

export default Home;