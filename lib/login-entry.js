var request = require('superagent')
var $ = require('jquery')

$('#submit-signin').click(function(e) {
	e.preventDefault()
	var email = $('#signin-email-input').val()
	var userNotFound = {
		"users": [null]
		}
	request
		.get('http://god-controller.herokuapp.com/users')
		.query({email: email})
		.end(function(err, res) {
			if (res === userNotFound) {
				console.log('email doesnt exist in database')
				alert("That email address wasn't found. Please sign up to start painting.")
			}
			else {
				console.log('email exists in database')
				window.location.assign('/canvas')
			}
		})
})

$('#submit-signup').click(function(e) {
	e.preventDefault()
	var newUser = {'userName': $('#username-input').val(),
				'userEmail': $('#signup-email-input').val(),
				'password_hash': $('#signup-password-input').val()
				}
	request
		.post('http://god-controller.herokuapp.com/users/signup')
		.send(newUser)
		.end(function(err, res){
			console.log('post done')
			//user is logged in
			window.location.assign('/canvas')
		})
})




