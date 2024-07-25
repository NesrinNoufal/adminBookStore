//import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addbook'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
        
        <p>Add Book</p>
      </div>
      </Link>
      
    </div>
  )
}

export default Sidebar
