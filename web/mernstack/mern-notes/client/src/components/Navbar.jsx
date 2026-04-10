import React from "react";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <div className="grid place-items-center">
      <nav className="rounded-lg shadow-md flex gap-4 m-2 p-2 w-fit bg-white">
        <Link to={"/"}>Home</Link>
        <Link to={"/notes"}>Notes</Link>
        <Link to={"#"}>About</Link>
      </nav>
    </div>
  );
};

export default Navbar;
