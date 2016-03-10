var React = require('react')

module.exports = React.createClass({
  render: function() {
    console.log("save painting")
    return (
    	<div>
      	<form id='addPainting'>
        <label id='title'>Title</label>
        <input type='text' />
        <label id='price' />Price</label>
        <input type='text' />
        <button type='button' onClick='savePainting()' >Save Painting</button>
    	</div>
		console.log('save painting')
    )
  }
})





	