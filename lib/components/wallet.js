var React = require('react')
var superagent = require('superagent')
var User = require('./walletroutes').model
// let's assume the object of user info is called 'user'

//test object

var user = {
  "name": "Bob",
  "money": "80",
}

module.exports = React.createClass({
  getInitialState: function() {
  return {money: User.money}
},
  update: function (e) {
    this.setState({money: e.User.money})
  },
  render: function() {
    return (
      <span className='Wallet'>
      ${this.state.money}
      </span>
    )
  }
})
