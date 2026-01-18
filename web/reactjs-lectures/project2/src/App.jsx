import React, { useState } from 'react'
import * as LuICONS from "react-icons/lu";
import * as FaICONS from "react-icons/fa";
import Users from './Users';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {APIS} from './utils/APIS.js'
const App = () => {

  const [value, setValue] = useState(0);

  const [toggle, setToggle] = useState(true);

  const add = () => {
    setValue(value + 1);
    console.log(value);
  }

  const minus = () => {
    setValue(value - 1);
    console.log(value);
  }

  return (
    <>
    <Navbar />


      <Users />


      <hr />

       <FaICONS.FaGithubSquare /> App count is {value}
      <br />
      <button onClick={add}>
        Change value (+)
      </button>
      
      <button onClick={minus}>
        Change value (-)
      </button>
      <hr />

      <input type={toggle ? "password" : "text"} />

      {/* <button onMouseDown={()=> setToggle(!toggle)} onMouseUp={()=> setToggle(!toggle)}>Show password</button> */}

      <button onClick={()=> setToggle(!toggle)}>
        { toggle ? <LuICONS.LuEyeOff /> : <LuICONS.LuEye /> }
        <span> Show password</span>
      </button>

    <Footer />
    </>
  )
}

export default App
