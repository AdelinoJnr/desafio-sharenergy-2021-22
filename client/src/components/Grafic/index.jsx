import React from 'react';
import { BarChart, CartesianGrid, Tooltip, Legend, Bar, XAxis, YAxis } from 'recharts';
import { shape } from 'prop-types';

import './styles.css';

function Grafic({ factory }) {
  const { corrente_A, potencia_kW, temperatura_C, tempo_h, tensao_V } = factory;

  const data = [
    {
      name: 'Dados',
      'Corrente - A': corrente_A,
      'Potencia - kW': potencia_kW,
      'Temperatura - C': temperatura_C,
      'Tempo - H': tempo_h.toFixed(2),
      'Tensao - V': tensao_V,
    },
  ];

  return (
    <BarChart className="content-grafic" width={400} height={300} data={data}>
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis className="name-grafic" dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend className="legend-grafic" />
        <Bar className="bar-grafic" dataKey="Corrente - A" fill="rgb(209, 13, 199)" />
        <Bar className="bar-grafic" dataKey="Potencia - kW" fill="rgb(66, 46, 246)" />
        <Bar className="bar-grafic" dataKey="Temperatura - C" fill="rgb(212, 8, 8)" />
        <Bar className="bar-grafic" dataKey="Tempo - H" fill="rgb(39, 143, 36)" />
        <Bar className="bar-grafic" dataKey="Tensao - V" fill="rgb(255, 157, 0)" />
    </BarChart>
  );
}

Grafic.propTypes = {
  factory: shape().isRequired,
};

export default Grafic;