import React from 'react';
import AddFishForm from './AddFishForm';
import Fishes from './Fishes';

const Inventory = props => (
  <div>
    <p>Inventory</p>
    <AddFishForm addFish={props.addFish} />
    <button onClick={props.loadSamples}>Load Sample Fishes</button>
    <Fishes fishes={props.fishes} />
  </div>
);

export default Inventory;
