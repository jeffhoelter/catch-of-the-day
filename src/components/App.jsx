import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';

import samplesFishes from '../sample-fishes.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fishes: {},
      order: {},
    };
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Produce Market" age="5000" setMe />
          <ul className="list-of-fishes">
            <Fish />
            <Fish />
            <Fish />
            <Fish />

          </ul>
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}
export default App;
