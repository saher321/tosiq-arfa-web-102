import React from 'react'
import { NavLink } from 'react-router'
const Navbar = () => {
  return (
    <div className='flex items-center justify-center'>
      <nav className='flex gap-3 p-3 my-4 bg-black text-white w-fit rounded-full shadow-lg'>
        <NavLink to="/" className='font-bold text-xl py-3 px-5 rounded-full hover:bg-green-200 hover:text-black'>Home</NavLink>
        <NavLink to="/users" className='font-bold  text-xl py-3 px-5 rounded-full hover:bg-green-200 hover:text-black'>Users</NavLink>
        <NavLink to="/recipes" className='font-bold  text-xl py-3 px-5 rounded-full hover:bg-green-200 hover:text-black'>Recipes</NavLink>
        <NavLink to="/about-us" className='font-bold text-xl py-3 px-5 rounded-full hover:bg-green-200 hover:text-black'>About</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
