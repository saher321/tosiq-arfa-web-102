import React from 'react'
import MyButton from './MyButton'

const Navbar = () => {
    const showData = () => {
        console.log("Hello from navbar")
    }
  return (
    <div>
        <nav>
            <a href="#">Home</a> | {" "}
            <a href="#">About</a> | {" "}
            <a href="#">Contact</a> | {" "}

            <MyButton onclick={showData} title="Login" />
        </nav>      
    </div>
  )
}

export default Navbar
