import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

const getOrderButtonText = isAvailable => (isAvailable ? 'Add To Order' : 'Sold Out');
const isAvailable = statusText => statusText === 'available';

const Fish = ({ details, addToOrder, index }) => (
  <li className="menu-fish">
    <img src={details.image} alt={details.name} />
    <h3 className="fish-name">
      {details.name}
      <span className="price">{formatPrice(details.price)}</span>
    </h3>
    <p>{details.desc}</p>
    <button onClick={() => addToOrder(index)} disabled={!isAvailable(details.status)}>
      {getOrderButtonText(isAvailable(details.status))}
    </button>
  </li>
);

Fish.propTypes = {
  addToOrder: PropTypes.func.isRequired,
  details: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired,
};

export default Fish;
