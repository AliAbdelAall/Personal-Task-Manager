import React from 'react'

const AddButton = ({text, handleClick}) => {
  return (
    <button className='add-btn white bold text-sm bg-primary' onClick={handleClick}>{text}</button>
  )
}

export default AddButton