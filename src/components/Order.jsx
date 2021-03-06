import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';

import { formatPrice } from '../helpers';

const getOrderTotal = (fishes, order) => {
  const orderIds = Object.keys(order);

  const totalAmount = orderIds.reduce((prevTotal, key) => {
    const fish = fishes[key];
    const count = order[key];
    const isAvailable = fish && fish.status === 'available';
    if (isAvailable) {
      return prevTotal + (count * fish.price || 0);
    }
    return prevTotal;
  }, 0);
  return totalAmount;
};

class Order extends React.Component {
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];

    if (!fish || fish.status === 'unavailable') {
      return <li key={key}>Sorry, {fish ? fish.name : 'fish'} is no longer available.</li>;
    }
    return (
      <li key={key}>
        <span>
          <CSSTransitionGroup
            className="count"
            component="span"
            transitionName="count"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span key={count}>{count}</span>
          </CSSTransitionGroup>
          lbs {fish.name} <button onClick={() => this.props.removeFromOrder(key)}>×</button>
        </span>

        <span className="price">{formatPrice(count * fish.price)}</span>
      </li>
    );
  };

  render() {
    const { fishes, order } = this.props;
    const totalAmount = getOrderTotal(fishes, order);
    const orderIds = Object.keys(order);

    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <CSSTransitionGroup
          className="order"
          component="ul"
          transitionName="order"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {orderIds.map(this.renderOrder)}
          <li className="total">
            <strong>Total</strong>
            {formatPrice(totalAmount)}
          </li>
        </CSSTransitionGroup>
      </div>
    );
  }
}

Order.propTypes = {
  removeFromOrder: PropTypes.func.isRequired,
  fishes: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired,
};

export default Order;
