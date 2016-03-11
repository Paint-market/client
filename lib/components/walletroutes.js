var BackboneModel = require('backbone-model').Model
var BackboneCollection =require('backbone-collection').collection
var sync = require('backbone-super-sync')

var id = ""

BackboneCollection.prototype.sync = function () {
  return sync.apply(this, arguments)
}

BackboneModel.sync = sync

var User = BackboneModel.extend({
  url: 'http://god-controller/user/' + id
})

module.exports ={
  model: User
}
