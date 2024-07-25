import React from 'react'
import {Routes,Route} from 'react-router-dom'
import './styles/Admin.css'
import AddBook from '../components/AddBook/AddBook.jsx'
import ListBooks from '../components/ListBooks/ListBooks.jsx'
import Sidebar from '../components/Sidebar/Sidebar.jsx'

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <ListBooks/>
    </div>
  )
}

export default Admin;
