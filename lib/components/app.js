var _ = require('lodash')
var React = require('react')
var Wallet = require('./wallet.js')
var CardList  = require('./card-list')
var request = require('superagent')
var Lightbox = require('./lightbox.js')
var LightboxTrigger = require('./lightbox.js').LightboxTrigger



var dummyCards = [
 {
   "userID": 19,
   "userName": "James Brown",
   "money": 1000,
   "imageUrl": "http://www.fillmurray.com/400/400",
   "price": 400,
   "artistName": "Jason Server",
   "paintingId": 124234,
   "ownerId": 23,
   "ownerName": "Howard Smith",
   "title": "Scream"
 },
 {
   "userID": 30,
   "userName": "Michael Jackson",
   "money": 1000,
   "imageUrl": "http://www.fillmurray.com/400/400",
   "price": 200,
   "artistName": "Joseph Quested",
   "paintingId": 342342,
   "ownerId": 25,
   "title": "Scream",
   "ownerName": "Richard Joe"
 }, {
   "userID": 30,
   "userName": "Michael Jackson",
   "money": 1000,
   "imageUrl": "http://www.fillmurray.com/400/400",
   "price": 200,
   "artistName": "Joseph Quested",
   "paintingId": 23332,
   "ownerId": 25,
   "title": "Scream",
   "ownerName": "Richard Joe"
 }
]

module.exports = React.createClass({
  getInitialState: function() {
    return {
      cards: []
    }
  },

  componentDidMount: function() {
    //
        this.setState({ cards: dummyCards })
  },

  render: function() {
    return (
      <div>
        <CardList cards={this.state.cards} />
      </div>
    )
  }
})

  // render: function () {
  //   console.log("now rendering")
  //   return (
  //     <div>
  //     <div></div>
  //     <div><span className='Wallet'> <Wallet /></span></div>
  //     </div>
  //     // <Card />
  //     )
  // },
  // render: function() {
  //   return (
  //     <Lightbox />
  //   )
  // },
