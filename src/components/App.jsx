import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fishes from './Fishes';

import samplesFishes from '../sample-fishes';

class App extends React.Component {
  constructor() {
    super();

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    // this.addToOrder = this.addToOrder.bind(this);

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

  loadSamples = () => {
    this.setState({
      fishes: samplesFishes,
    });
  };

  addToOrder = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Produce Market" age="5000" setMe />
          <Fishes fishes={this.state.fishes} addToOrder={this.addToOrder} />
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSamples={this.loadSamples}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}
export default App;
