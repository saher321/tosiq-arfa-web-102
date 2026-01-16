import React from 'react'

const MyButton = ({ title, onclick }) => {
  return (
    <button onClick={onclick}>
      { title }
    </button>
  )
}

export default MyButton
