import React, { useContext } from 'react'
import { MyContext } from '../context/ContextStore'
const About = () => {
  let data = useContext(MyContext);
  return (
    <div>
      About page <br />
      {data.name} - {data.age}
    </div>
  )
}

export default About
