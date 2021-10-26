import React from 'react';
import { shape } from 'prop-types';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';
import { Link } from 'react-router-dom';

function CardFactory({ factory }) {
  const { corrente_A, potencia_kW, temperatura_C, tempo_h, tensao_V, _id } = factory;
  const data = [
    { name: 'Corrente', uv: corrente_A },
    { name: 'Potencia', uv: potencia_kW },
    { name: 'Temperatura', uv: temperatura_C },
    { name: 'Tempo', uv: tempo_h },
    { name: 'Tensão', uv: tensao_V },
  ];

  return (
    <div>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
      <Link to={`/factory/${_id}`}>Ver detalhes</Link>
    </div>
  );
}

CardFactory.propTypes = {
  factory: shape().isRequired,
};

export default CardFactory;