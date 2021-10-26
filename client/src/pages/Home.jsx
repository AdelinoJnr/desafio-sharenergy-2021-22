import React, { useEffect, useState } from 'react';
import Factories from '../components/Factories';

import Header from '../components/Header';
import { getAllFactorys } from '../services/api';

function Home() {
  const [factories, setFactories] = useState();
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    getAllFactorys(setFactories, Number(skip));
  }, [skip]);

  return (
    <>
      <Header />
      { factories && <Factories factories={factories} /> }
      <button
        disabled={skip === 0}
        onClick={() => setSkip(skip - 10)}
      >
        Anterior
      </button>
      <button
        onClick={() => setSkip(skip + 10)}
      >
        Proximo
      </button>
    </>
  );
}

export default Home;