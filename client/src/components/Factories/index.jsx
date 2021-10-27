import React from 'react';
import { shape, arrayOf } from 'prop-types';
import CardFactory from '../CardFactory';

import './styles.css';

function Factories({ factories }) {
  return (
    <section className="content-factories">
      {factories.map((factory) => <CardFactory key={factory._id} factory={factory} />)}
    </section>
  );
}

Factories.propTypes = {
  factories: arrayOf(shape()).isRequired,
};

export default Factories;