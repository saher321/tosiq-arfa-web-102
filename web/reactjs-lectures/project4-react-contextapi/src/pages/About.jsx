import React, { useContext } from 'react'
import { MyContext } from '../context/ContextStore'
const About = () => {
  let myname = useContext(MyContext);
  return (
    <div>
      About page <br />
      {myname}
    </div>
  )
}

export default About
