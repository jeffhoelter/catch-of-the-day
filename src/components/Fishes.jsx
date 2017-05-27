import React from 'react';
import PropTypes from 'prop-types';
import Fish from './Fish';

const Fishes = props => (
  <ul className="list-of-fishes">
    {Object.keys(props.fishes).map(key => (
      <Fish key={key} index={key} details={props.fishes[key]} addToOrder={props.addToOrder} />
    ))}
  </ul>
);

Fishes.propTypes = {
  addToOrder: PropTypes.func.isRequired,
  fishes: PropTypes.object.isRequired,
};

export default Fishes;
