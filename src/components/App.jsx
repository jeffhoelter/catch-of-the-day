import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';

import samplesFishes from '../sample-fishes';

class App extends React.Component {
  constructor() {
    super();

    this.addFish = this.addFish.bind(this);

    this.state = {
      fishes: {},
      order: {},
    };
  }

  addFish = (fish) => {
    const fishes = { ...this.state.fishes };
    const timeStamp = Date.now();
    fishes[`fish-${timeStamp}`] = fish;
    this.setState({ fishes });
  };

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
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}
export default App;
