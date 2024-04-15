import React from 'react'
import "./style.css"

const AddInput = ({type, placeholder, handleChange}) => {
  return (
    <input className='add-input' type={type} placeholder={placeholder} onChange={handleChange}/>
  )
}

export default AddInput