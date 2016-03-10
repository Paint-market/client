require('./testdom')('<html><body></body></html>')
var React = require('react/addons')
var Card = require('../lib/components/card')
var expect = require('chai').expect
var shallow = require('enzyme').shallow
var mount = require('enzyme').mount

var card = {
  "userID": 30,
  "userName": "Michael Jackson",
  "userEmail": "mj@gmail.com",
  "money": 1000,
  "password_hash": "asflkwenoi893"
}

describe('card', function() {
  it('have the right props', function() {
    var wrapper = shallow(<Card />)
    expect(wrapper.find('h4')).to.have.length(2)
    expect(wrapper.prop('title')).to.equal(card.title)
  })
})
