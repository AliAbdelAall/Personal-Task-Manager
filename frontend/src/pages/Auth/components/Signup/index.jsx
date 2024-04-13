import React from 'react'
import { Link, useNavigate  } from "react-router-dom"

// redux
import { useDispatch, useSelector } from "react-redux"
import { authSliceName, switchToLogin, handleInputChange, setError, } from '../../../../core/Redux/auth/authSlice'

// Toastify
import {toast} from "react-toastify"

// components
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'

// utilities
import { sendRequest } from '../../../../core/Utilities/remote/request' 
import { requestMethods } from '../../../../core/Enums/requestMethods'
import { setLocalUser } from '../../../../core/Utilities/local/user'


const Signup = () => {

  const { email, username, password, error, errorMessage} = useSelector((global) => global[authSliceName])
  const dispatcher = useDispatch()
  const navigate = useNavigate()

  const validateSignup = () => {
    const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    if(!regex.test(email)){
      const errorAction = setError("Invalid email")
      dispatcher(errorAction)
      return
    }
    if (username.length < 3){
      const errorAction = setError("Username must be 3->20 charachters")
      dispatcher(errorAction)
      return
    }
    
    if (password.length < 8){
      const errorAction = setError("Password must be at least 6 characters long")
      dispatcher(errorAction)
      return
    }

    sendRequest(requestMethods.POST, "/auth/register", {
      username,
      email,
      password
    }).then((response) => {
      if(response.status === 201){
        setLocalUser(response.data.token)
        toast.success('Login successful')
        navigate('/home')
      }else if (response.data.message){
        const errorAction = setError('User already exists') 
        dispatcher(errorAction)
      }
    }).catch((error)=>{
      toast.error("Somthing went wrong...")
    })
  }

  return (
    <div className='flex column center login-wrapper'>
      <div className='flex column center input-wrapper'>
        <h1>Taskify</h1>
        {error && <p className='text-xsm text-error error-text'>{errorMessage}</p>}

        <Input
        type={"text"}
        placeholder={'Username'}
        handleChange={(e) => {
          const change = handleInputChange({key: "username", value: e.target.value})
          dispatcher(change)}}
        />

        <Input
        type={"text"}
        placeholder={'Email'}
        handleChange={(e) => {
          const change = handleInputChange({key: "email", value: e.target.value})
          dispatcher(change)}}
        />
        
        <Input
        type={"password"}
        placeholder={'Password'}
        handleChange={(e) => {
          const change = handleInputChange({key: "password", value: e.target.value})
          dispatcher(change)}}
        />

        <Button
        text={"Signup"}
        handleClick={validateSignup}
        />

      </div>
      <div className='flex center  login-switch'>
        <p className='text-sm'>Have an account? </p> 
        <Link 
        className='text-sm switch-link'
        to="/"
        onClick={()=>{
          const switchLogin = switchToLogin()
          dispatcher(switchLogin)
        }} 
        >
          Log in
        </Link>
      </div>
    </div>
  )
}

export default Signup