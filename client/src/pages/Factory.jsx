import React, { useEffect, useState } from 'react';
import { shape } from 'prop-types';

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
    <div>
      { factory && <Grafic factory={factory} /> }
    </div>
  );
}

Factory.propTypes = {
  match: shape().isRequired,
};

export default Factory;