import React from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';
import { formatPrice } from '../helpers';

class Inventory extends React.Component {
  handleChange = (event, key) => {
    const fish = this.props.fishes[key];
    const updatedFish = { ...fish, [event.target.name]: event.target.value };
    this.props.updateFish(key, updatedFish);
  };

  renderInventory = (key) => {
    const fish = this.props.fishes[key];
    return (
      <div className="fish-edit" key={key}>
        <input
          type="text"
          name="name"
          value={fish.name}
          placeholder="Fish Name"
          onChange={e => this.handleChange(e, key)}
        />
        <input
          type="text"
          name="price"
          value={formatPrice(fish.price)}
          placeholder="Fish Price"
          onChange={e => this.handleChange(e, key)}
        />
        <select
          type="text"
          name="status"
          value={fish.status}
          onChange={e => this.handleChange(e, key)}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          type="text"
          name="desc"
          value={fish.desc}
          placeholder="Fish Desc"
          onChange={e => this.handleChange(e, key)}
        />
        <input
          type="text"
          name="image"
          value={fish.image}
          placeholder="Fish Image"
          onChange={e => this.handleChange(e, key)}
        />
        <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
      </div>
    );
  };

  render() {
    return (
      <div>
        <p>Inventory</p>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    );
  }
}

Inventory.propTypes = {
  addFish: PropTypes.func.isRequired,
  updateFish: PropTypes.func.isRequired,
  removeFish: PropTypes.func.isRequired,
  loadSamples: PropTypes.func.isRequired,
  fishes: PropTypes.object.isRequired,
};

export default Inventory;
