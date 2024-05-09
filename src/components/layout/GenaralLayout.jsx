import React from 'react'
import Nav from './Nav'

function GenaralLayout({children}) {
  return (
    <div>
        <Nav />
        <div className='bg-gray-400'>

        {children}
        </div>
        
    </div>
  )
}

export default GenaralLayout
