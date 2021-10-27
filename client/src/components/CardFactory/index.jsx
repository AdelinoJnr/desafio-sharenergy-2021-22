import React from 'react';
import { shape } from 'prop-types';
import { Link } from 'react-router-dom';

import Grafic from '../Grafic';

import './styles.css';

function CardFactory({ factory }) {
  const { _id } = factory;

  return (
    <div className="content-factory">
      <Grafic factory={factory} />
      <Link className="link-details-factory" to={`/factory/${_id}`}>Ver detalhes ...</Link>
    </div>
  );
}

CardFactory.propTypes = {
  factory: shape().isRequired,
};

export default CardFactory;