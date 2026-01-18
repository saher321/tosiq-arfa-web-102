import React from 'react'
const Navbar = () => {
  return (
    <div className='flex items-center justify-center'>
      <nav className='flex gap-3 p-3 my-4 bg-black text-white w-fit rounded-full shadow-lg'>
        <a href="#" className='font-bold text-xl py-3 px-5 rounded-full hover:bg-green-200 hover:text-black'>Home</a>
        <a href="#" className='font-bold  text-xl py-3 px-5 rounded-full hover:bg-green-200 hover:text-black'>Users</a>
        <a href="#" className='font-bold text-xl py-3 px-5 rounded-full hover:bg-green-200 hover:text-black'>About</a>
      </nav>
    </div>
  )
}

export default Navbar
