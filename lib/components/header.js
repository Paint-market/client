import React from 'react'

export default React.createClass({
  render: function () {
    return (
      <h1 className='home-h1'>{this.props.text}</h1>
    )
  }
})
