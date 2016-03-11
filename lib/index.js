import App from './components/app'
import React from 'react'
import ReactDOM from 'react-dom'
import domready from 'domready'
import Wallet from './components/wallet'
import jquery from 'jquery'


domready(() => {
  ReactDOM.render(<App />, document.getElementById('app'))
})

domready(() => {
  ReactDOM.render(<Wallet />, document.getElementById('wallet'))
})