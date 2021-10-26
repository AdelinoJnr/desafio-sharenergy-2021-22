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

  const handleClickNext = () => {
    setSkip(skip + 10);
  };

  const handleClickPrevious = () => {
    setSkip(skip - 10);
  };

  return (
    <>
      <Header />
      { factories && <Factories factories={factories} /> }
      <button disabled={skip === 0} onClick={handleClickPrevious}>Anterior</button>
      <button onClick={handleClickNext}>Proximo</button>
    </>
  );
}

export default Home;