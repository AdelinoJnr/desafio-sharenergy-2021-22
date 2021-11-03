import React, { useContext, useEffect, useState } from 'react';
import { shape } from 'prop-types';

import Header from '../components/Header';
import { getFactoryById, updateFactoriesUser } from '../services/api';
import Grafic from '../components/Grafic';
import { UserContext } from '../context/userContext';
import { checkedToken } from '../utils/helpers';
import { Redirect } from 'react-router';

function Factory({ match }) {
  const { user: { _id }, token } = useContext(UserContext);
  console.log(_id);

  const [factory, setFactory] = useState();
  const [noToken, setNoToken] = useState(false);
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

  useEffect(() => {
    checkedToken(token, setNoToken);
  }, []);

  if (noToken) {
    return (
      <Redirect to="/login" />
    );
  }

  const renderForm = () => {
    return (
      <form className="form-percentual">
        <h2 className="title-pages">Preenche os dados</h2>
        <input
          type="number"
          placeholder="percentual"
          value={percentual}
          onChange={(ev) => setPercentual(ev.target.value)}
        />
        <button className="btn btn-percentual-submit" onClick={handleClick} >Participar</button>
      </form>
    );
  };

  return (
    <>
      <main className="main-factory">
        <Header />
        <h2 className="title-pages">Usina Fotovoltaica</h2>
        { factory && <Grafic className="content-grafic" height={700} width={550} factory={factory} /> }
        <button
          className="btn"
          onClick={() => setParticipation(true)}
        >
          Desejo participar
        </button>
        { participation && renderForm() }
      </main>
    </>
  );
}

Factory.propTypes = {
  match: shape().isRequired,
};

export default Factory;