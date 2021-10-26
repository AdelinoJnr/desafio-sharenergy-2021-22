import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import { getAllFactorys } from '../services/api';

function Home() {
  const [factories, setFactories] = useState();

  useEffect(() => {
    getAllFactorys(setFactories);
  }, []);

  console.log(factories);

  return (
    <>
      <Header />
    </>
  );
}

export default Home;