var React = require('react')
var request = require('superagent')
// var User = require('./walletroutes').model
// let's assume the object of user info is called 'user'

//test object

var user = {
  "name": "Bob",
  "money": "80",
}

var User = 0
var id = 0

module.exports = React.createClass({
  getInitialState: function() {
  return {
    money: null,
    userId: null
  }
},
  update: function (e) {
    console.log(e.target.value)
    var userId = e.target.value
    this.setState({ userId: userId })
  },

  handleClick: function () {
    console.log('handleClick fired', this.state)
    request
      .get("http://god-controller.herokuapp.com/users/" + this.state.userId )
      .end(function(err, res){
        var money = res.body.money
        console.log(money)
        this.setState({ money: money })
      }.bind(this))
  },

  render: function() {
    console.log('userId', this.state.userId)
    return (
      <span className='Wallet'>
      <input onChange={this.update} type="number" name="enteredid"/>
      <button onClick={this.handleClick}>Click!</button>
        ${this.state.money} to spend
      </span>
    )
  }
})
