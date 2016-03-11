var _ = require('lodash')
var uuid = require('uuid')
var React = require('react')
var request = require('superagent')
var SavePainting = require('./savePainting')

module.exports = React.createClass({
  // getInitialState: function() {
  //   console.log("inital state in canvas app")
  //   return {
  //     title: "",
  //     price: "",
  //     imageURL: ""
  //   }
  // },

  componentDidMount: function() {
    console.log("component did mount")
    // request
    //   .get('http://localhost:3000/market/paintings')
    //   .end( function(err, data) {
    //     if (err) throw err
    //     console.log(data)
    //     this.setState({ cards: data.toJSON() })
    //     }.bind(this))
  },
	add: function (title, price, imageURL) {
		var paintingId = uuid.v4()
    var data = ({title: title, price: price, imageUrl: imageURL, paintingId: paintingId, creatorId: 1, ownerId: 1})
    console.log('data in canvas app', data)
    request
      .post('http://god-controller.herokuapp.com/paintings')
      .send(data)
      .end( function(err, data) {
        if (err) throw err
        }.bind(this))
      console.log('inside add in canvas app')
  },
    
  
  render: function () {
    console.log("now rendering")
    return (
      	<div className='savePainting'>
      	<SavePainting add={this.add}/>
      	</div>
      )
  }
 
 })
