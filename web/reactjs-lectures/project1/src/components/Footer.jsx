import React from 'react'
import MyButton from './MyButton'

const Footer = () => {

    const go = () => {
        window.location.href = "https://www.google.com"
    }

  return (
    <footer>
      2026 &copy; copyright @ WEB-DEV
      <br />
            <MyButton onclick={go} title="Privacy policy" />
    </footer>
  )
}

export default Footer
