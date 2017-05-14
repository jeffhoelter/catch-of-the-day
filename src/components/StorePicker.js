import React from 'react'

class StorePicker extends React.Component {
  render () {
    return (
      <div>
        <form className="store-selector">
          <h2>Please Enter A Store</h2>
          <input type="text" required placeHolder="Store Name" />
          <button type="submit">Visit Store</button>
        </form>
      </div>
    )
  }
}

export default StorePicker
