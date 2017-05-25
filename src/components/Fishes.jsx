import React from 'react';
import Fish from './Fish';

const Fishes = props => (
  <ul className="list-of-fishes">
    {Object.keys(props.fishes).map(key => (
      <Fish key={key} index={key} details={props.fishes[key]} addToOrder={props.addToOrder} />
    ))}
  </ul>
);

export default Fishes;
