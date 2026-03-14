import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='my-4 grid place-items-center'>
      <nav className='flex gap-4 p-5 rounded-md shadow-md '>
        <Link to={'/'}>Home</Link>
        <Link to={'/departments'}>Departments</Link>
        <Link to={'/students'}>Students</Link>
      </nav>
    </div>
  )
}

export default Navbar
