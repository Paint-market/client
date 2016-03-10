import React from 'react'
import Header from './header'

const headerText = 'Paint Market'

export default React.createClass({
  render: () => {
    return (
     <div className='app'>
       <Header text={headerText}/>
     </div>
    )
  }
})
