import React, { useContext, useEffect, useState } from 'react';
import { shape } from 'prop-types';

import Header from '../components/Header';
import { getFactoryById, updateFactoriesUser } from '../services/api';
import Grafic from '../components/Grafic';
import { UserContext } from '../context/userContext';

function Factory({ match }) {
  const { user: { _id }, token } = useContext(UserContext);
  console.log(_id);

  const [factory, setFactory] = useState();
  const [percentual, setPercentual] = useState();
  const [participation, setParticipation] = useState(false);

  const { params: { id } } = match;

  const handleClick = async (ev) => {
    ev.preventDefault();
    const payload = { usinaId: id, percentual: Number(percentual) };
    await updateFactoriesUser(_id, payload, token);
  };

  useEffect(() => {
    getFactoryById(id, setFactory);
  }, []);

  return (
    <>
      <Header />
      { factory && <Grafic factory={factory} /> }
      <button onClick={() => setParticipation(true)}>Desejo participar</button>
      { participation && (
        <form>
          <h1>Preenche os dados</h1>
          <input
            type="number"
            placeholder="percentual"
            value={percentual}
            onChange={(ev) => setPercentual(ev.target.value)}
          />
          <button onClick={handleClick} >Participar</button>
        </form>
      ) }
    </>
  );
}

Factory.propTypes = {
  match: shape().isRequired,
};

export default Factory;