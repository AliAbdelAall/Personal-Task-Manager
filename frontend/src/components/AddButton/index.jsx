import React from 'react'
import "./style.css"

const AddButton = ({text, handleClick}) => {
  return (
    <button className='add-btn white bold text-sm bg-primary' onClick={handleClick}>{text}</button>
  )
}

export default AddButton