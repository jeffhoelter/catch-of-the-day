import React from 'react';
import PropTypes from 'prop-types';

class StorePicker extends React.Component {
  goToStore(event) {
    event.preventDefault();
    // first grab the text from the box
    // next we will transition from / to /store/:storeId
    const storeId = this.storeInput.value;

    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    return (
      <div>
        <form className="store-selector" onSubmit={e => this.goToStore(e)}>
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            required
            placeholder="Store Name"
            defaultValue={this.props.defaultValue}
            ref={(input) => {
              this.storeInput = input;
            }}
          />
          <button type="submit">Visit Store</button>
        </form>
      </div>
    );
  }
}
StorePicker.propTypes = {
  defaultValue: PropTypes.string.isRequired,
};

StorePicker.contextTypes = {
  router: PropTypes.object,
};

export default StorePicker;
