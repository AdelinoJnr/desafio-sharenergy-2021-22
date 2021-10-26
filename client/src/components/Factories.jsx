import React from 'react';
import { arrayOf } from 'prop-types';
import CardFactory from './CardFactory';

function Factories({ factories }) {
  console.log(factories);
  return (
    <section>
      {factories.map((factory) => <CardFactory key={factory._id} factory={factory} />)}
    </section>
  );
}

Factories.propTypes = {
  factories: arrayOf().isRequired,
};

export default Factories;