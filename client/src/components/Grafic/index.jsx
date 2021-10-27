import React from 'react';
import { BarChart, CartesianGrid, Tooltip, Legend, Bar, XAxis, YAxis } from 'recharts';
import { shape } from 'prop-types';

function Grafic({ factory }) {
  const { corrente_A, potencia_kW, temperatura_C, tempo_h } = factory;

  const data = [
    { name: 'Corrente', D: corrente_A },
    { name: 'Potencia', D: potencia_kW },
    { name: 'Temperatura', D: temperatura_C },
    { name: 'Tempo', D: tempo_h },
    // { name: 'Tensão', V: tensao_V },
  ];

  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
        <Bar dataKey="D" fill="#82ca9d" />
    </BarChart>
  );
}

Grafic.propTypes = {
  factory: shape().isRequired,
};

export default Grafic;