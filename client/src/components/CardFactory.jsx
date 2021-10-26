import React from 'react';
import { shape } from 'prop-types';
import { Link } from 'react-router-dom';

import Grafic from './Grafic';

function CardFactory({ factory }) {
  const { _id } = factory;

  return (
    <div>
      <Grafic factory={factory} />
      <Link to={`/factory/${_id}`}>Ver detalhes</Link>
    </div>
  );
}

CardFactory.propTypes = {
  factory: shape().isRequired,
};

export default CardFactory;