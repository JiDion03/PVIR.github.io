import React from 'react';

import ex1 from './images/ex1.jpg';
import ex2 from './images/ex2.jpg';
import ex3 from './images/ex3.jpg';
import ex4 from './images/ex4.jpg';
import ex5 from './images/ex5.jpg';

const Exhaust = () => {
  const exhaustData = [
    {
      image: ex1,
      name: 'Exhaust 1',
      material: 'Stainless Steel',
      soundLevel: 'Moderate',
    },
    {
      image: ex2,
      name: 'Exhaust 2',
      material: 'Carbon Fiber',
      soundLevel: 'Aggressive',
    },
    {
      image: ex3,
      name: 'Exhaust 3',
      material: 'Titanium',
      soundLevel: 'High',
    },
    {
      image: ex4,
      name: 'Exhaust 4',
      material: 'Aluminum',
      soundLevel: 'Low',
    },
    {
      image: ex5,
      name: 'Exhaust 5',
      material: 'Titanium',
      soundLevel: 'Moderate',
    },
  ];

  return (
    <div>
      <h1>Exhaust Information</h1>
      <div className="exhaust-container">
        {exhaustData.map((exhaust, index) => (
          <div className="exhaust-item" key={index}>
            <img src={exhaust.image} alt={exhaust.name} className="exhaust-image" />
            <h2>{exhaust.name}</h2>
            <p>Material: {exhaust.material}</p>
            <p>Sound Level: {exhaust.soundLevel}</p>
          </div>
        ))}
      </div>
      <a className="back-link" href="/">
        Back to Motorcycle Information
      </a>
    </div>
  );
};

export default Exhaust;
