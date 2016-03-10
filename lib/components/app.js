var _ = require('lodash')
var React = require('react')
var Wallet = require('./wallet.js')
var CardList  = require('./card-list')
var request = require('superagent')
var Lightbox = require('./lightbox.js')

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
   "paintingId": 23332,
   "ownerId": 25,
   "title": "Scream",
   "ownerName": "Richard Joe"
 },
 {
   "userID": 10,
   "userName": "John Denver",
   "money": 1000,
   "title": "Scream",
   "imageUrl": "http://www.fillmurray.com/400/400",
   "price": 200,
   "artistName": "Ashley Stanbridge",
   "paintingId": 34342,
   "ownerId": 21,
   "ownerName": "Anna Blackwell"
 }
]

module.exports = React.createClass({
  getInitialState: function() {
    console.log("in gential state")
    return {
      cards: []
    }
  },

  componentDidMount: function() {
        this.setState({ cards: dummyCards })
  },   

  render: function() {
    console.log("in app render")
    return (
      <CardList cards={this.state.cards} />
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
