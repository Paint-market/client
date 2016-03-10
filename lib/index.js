import App from './components/app'
import Wallet from './components/wallet'
import React from 'react'
import ReactDOM from 'react-dom'
import domready from 'domready'

domready(() => {
  ReactDOM.render(<App />, document.getElementById('app'))
  ReactDOM.render(<App />, document.getElementById('wallet'))
})
