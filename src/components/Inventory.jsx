import React from 'react';
import AddFishForm from './AddFishForm';

const Inventory = props => (
  <div>
    <p>Inventory</p>
    <AddFishForm addFish={props.addFish} />
    <button onClick={props.loadSamples}>Load Sample Fishes</button>
  </div>
);

export default Inventory;
