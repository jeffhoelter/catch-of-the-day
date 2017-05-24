import React from 'react';
import AddFishForm from './AddFishForm';

const Inventory = props => (
  <div>
    <p>Inventory</p>
    <AddFishForm addFish={props.addFish} />
  </div>
);

export default Inventory;
