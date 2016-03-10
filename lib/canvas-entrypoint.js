import CanvasApp from './components/canvas-app'
import React from 'react'
import ReactDOM from 'react-dom'
import domready from 'domready'

domready(() => {
  ReactDOM.render(<CanvasApp />, document.getElementById('canvas-app'))
})