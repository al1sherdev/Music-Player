import React from 'react'
import Sidebaritem from '../Sidebaritem/Sidebaritem'
import './Sidebar.css'

const Sidebar = () => {
  
  return (
    <div className='sidebar'>
        <div className='three_point'>
            <div className='point'></div>
            <div className='point'></div>
            <div className='point'></div>
        </div>
        <Sidebaritem />
    </div>
  )
}

export default Sidebar