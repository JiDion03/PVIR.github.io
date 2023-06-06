import React from 'react';

import en1 from './images/en1.jpg';
import en2 from './images/en2.jpg';
import en3 from './images/en3.jpg';
import en4 from './images/en4.jpg';
import en5 from './images/en5.jpg';

const EngineInformation = () => {
  const engineData = [
    {
      image: en1,
      name: 'Engine 1',
      displacement: '1000cc',
      configuration: 'Inline 4',
      power: '200hp',
      torque: '150Nm',
    },
    {
      image: en2,
      name: 'Engine 2',
      displacement: '850cc',
      configuration: 'V-Twin',
      power: '150hp',
      torque: '120Nm',
    },
    {
      image: en3,
      name: 'Engine 3',
      displacement: '1200cc',
      configuration: 'Inline 3',
      power: '180hp',
      torque: '140Nm',
    },
    {
      image: en4,
      name: 'Engine 4',
      displacement: '600cc',
      configuration: 'Inline 4',
      power: '120hp',
      torque: '100Nm',
    },
    {
      image: en5,
      name: 'Engine 5',
      displacement: '750cc',
      configuration: 'V4',
      power: '160hp',
      torque: '130Nm',
    },
  ];

  return (
    <div>
      <h1>Engine Information</h1>
      <div className="container engine">
        {engineData.map((engine, index) => (
          <div className="engine-item" key={index}>
            <img className="engine-image" src={engine.image} alt={engine.name} />
            <div className="engine-info">
              <h2>{engine.name}</h2>
              <p>Displacement: {engine.displacement}</p>
              <p>Configuration: {engine.configuration}</p>
              <p>Power: {engine.power}</p>
              <p>Torque: {engine.torque}</p>
            </div>
          </div>
        ))}
      </div>
      <a className="back-link" href="/">
        Back to Motorcycle Information
      </a>
    </div>
  );
};

export default EngineInformation;
