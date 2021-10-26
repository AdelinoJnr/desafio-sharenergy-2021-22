import React, { useEffect, useState } from 'react';
import { shape } from 'prop-types';
import Header from '../components/Header';

import { getFactoryById } from '../services/api';
import Grafic from '../components/Grafic';

function Factory({ match }) {
  const [factory, setFactory] = useState();
  const { params: { id } } = match;

  useEffect(() => {
    getFactoryById(id, setFactory);
  }, []);

  console.log(factory);

  return (
    <>
      <Header />
      { factory && <Grafic factory={factory} /> }
    </>
  );
}

Factory.propTypes = {
  match: shape().isRequired,
};

export default Factory;