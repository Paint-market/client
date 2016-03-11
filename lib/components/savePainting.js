var React = require('react')

module.exports = React.createClass({
	getInitialState: function() {
    console.log("inital state in canvas app")
    return {
      title: "",
      price: "",
      imageURL: ""
    }
  },

	handleTitleChange: function (e) {
		this.setState({title: e.target.value})
	},

	handlePriceChange: function (e) {
		this.setState({price: e.target.value})
	},

	handleImageURLChange: function (e) {
		this.setState({imageURL: e.target.value})
	},

	handleClick: function () {
		this.props.add(this.state.title, this.state.price, this.state.imageURL)
	},

  render: function() {
    console.log("save painting")
    return (
    	<div>
      	<form id='addPainting'>
      		<p>
		        <label id='title'>Title</label>
		        <input type='text' onChange={this.handleTitleChange} />
		        <p>
		        <label id='price'>Price</label>
		        <input type='number' onChange={this.handlePriceChange} />
		        </p>
		        <label id='imageURL'>URL</label>
		        <input type='text' onChange={this.handleImageURLChange} />
		        <p>
		        <button type='button' id='add-button' onClick={this.handleClick} >Save Painting</button>
		        </p>
	        </p>
        </form>
    	</div>
    )
  }
})






	