import App from './components/app'
import React from 'react'
import ReactDOM from 'react-dom'
import domready from 'domready'

domready(() => {
  ReactDOM.render(<App />, document.getElementById('app'))
})
