import React from 'react'
import { NavLink } from 'react-router'
const Navbar = () => {

  const links = [
    { url: "/", title: "Home" },
    { url: "/users", title: "Users" },
    { url: "/about-us", title: "About" },
  ];

  const active = "font-bold text-xl py-3 px-5 rounded-full bg-green-200 text-black"
  const inActive = "font-bold text-xl py-3 px-5 rounded-full hover:bg-green-200 hover:text-black"

  return (
    <div className='flex items-center justify-center'>
      <nav className='flex gap-3 p-3 my-4 bg-black text-white w-fit rounded-full shadow-lg'>
        {
          links.map((link) => {
            return (
              <NavLink to={link.url} 
              className={({isActive}) => isActive ? active : inActive}
              >
                {link.title}
              </NavLink>
            )
          })
        }
      </nav>
    </div>
  )
}

export default Navbar
