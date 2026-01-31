import React, { useRef } from 'react'
const About = () => {

  let name = useRef(null);

  const printValue = () => {
    console.log(name.current.value);
  }

  return (
    <div>
      About <br />
      <input ref={name} type="text" placeholder='Enter name' />
      <button onClick={printValue}>Get Value</button>
    </div>
  )
}

export default About
