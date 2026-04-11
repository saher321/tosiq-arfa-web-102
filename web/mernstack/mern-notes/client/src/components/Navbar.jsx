import React from "react";
import { Link, NavLink } from "react-router";
const Navbar = () => {

  const links = [
    {path: "/", title: "Home"},
    {path: "/notes", title: "Notes"},
    {path: "/about", title: "About"},
  ]
  const activeCss = "text-green-900 font-bold"

  return (
    <div className="grid place-items-center">
      <nav className="rounded-lg shadow-md flex gap-4 m-2 p-2 w-fit bg-white">
        
        {
          links.map((link, i)=>{
            return (
              <NavLink
              className={({ isActive }) => isActive ? activeCss : ""}
              to={link.path} key={i}>{link.title}</NavLink>
            )
          })
        }

      </nav>
    </div>
  );
};

export default Navbar;
