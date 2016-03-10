var _ = require('lodash')
var React = require('react')
var Wallet = require('./wallet.js')
var request = require('superagent')


module.exports = React.createClass({
  getInitialState: function() {
    console.log("in gential state")
    return {
      cards: []
    }
  },

  componentDidMount: function() {
    console.log("in get cards")
    request
      .get('http://localhost:3000/market/paintings')
      .end( function(err, data) {
        if (err) throw err
        console.log(data)
        this.setState({ cards: data.toJSON() })
        }.bind(this))
  },

  render: function () {
    console.log("now rendering")
    return (
      <div><div>hello world</div>
      <div><span className='Wallet'> <Wallet /></span></div>
      </div>
      // <Card />
      )
  },

})
