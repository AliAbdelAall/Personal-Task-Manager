import React from 'react'

const Input = ({type, placeholder, handleChange}) => {
  return (
    <input className='board-input' type={type} placeholder={placeholder} onChange={handleChange}/>
  )
}

export default Input