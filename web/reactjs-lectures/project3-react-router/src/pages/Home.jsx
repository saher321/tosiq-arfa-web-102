import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const Home = () => {

    const [counter, setCounter] = useState(0);

    // useEffect(()=>{
    //     console.log("Simple use effect!")
    // }) // call on every state change

    // useEffect(()=>{
    //     console.log("Array params useEffect")
    // }, []) // call on page load for the first time only
    useEffect(()=>{
        counter >= 5 && console.log("Will run when variable state change")
    }, [counter]) // call on variable state

  return (
    <div>

      Home page {counter}
      <div>
        <button
        className='m-1 p-1 bg-black rounded shadow text-white'
        onClick={() => setCounter(counter+1)}>Click to increase value</button>
      </div>
    </div>
  )
}

export default Home
