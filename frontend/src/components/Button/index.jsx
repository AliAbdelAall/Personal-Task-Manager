import React from 'react'

const Button = ({text, handleClick}) => {
  return (
    <button className='login-btn white bold text-sm bg-primary' onClick={handleClick}>{text}</button>
  )
}

export default Button