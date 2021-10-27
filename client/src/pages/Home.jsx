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