import React from 'react'
import { Link, useNavigate } from "react-router-dom"


// redux
import { useDispatch, useSelector } from "react-redux";
import { authSliceName, switchToSignup, handleInputChange, setError } from '../../../../core/Redux/auth/authSlice';

// Taostify
import { toast } from 'react-toastify'

// styles
import "./style.css"

// components
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'

// Tools
import { sendRequest } from '../../../../core/Utilities/remote/request';
import { requestMethods } from '../../../../core/Enums/requestMethods';
import { setLocalUser } from '../../../../core/Utilities/local/user';



const Login = () => {

  const { username, password, error, errorMessage } = useSelector((global) => global[authSliceName])
  const dispatcher = useDispatch()
  const navigate = useNavigate()
 
  const ValidateLogin = () => {
    if(!username){
      const errorAction = setError('Username must be 3->20 charachters')
      dispatcher(errorAction)
      return
    }
    if(password.length < 6){
      const errorAction = setError('Password must be at least 6 characters long')
      dispatcher(errorAction)
      return
    }

    sendRequest(requestMethods.POST, "/auth/login", {
      username,
      password,
    }).then((response) =>{
      if(response.status === 200){
        setLocalUser(response.data.token)
        toast.success("Login successful")
        navigate('/home')
      }else{
        const errorAction = setError("Username/password incorrect") 
        dispatcher(errorAction)
      }
    }).catch((error) => {
      toast.error("Something Went Wrong")
      console.error(error)
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
        type={"password"}
        placeholder={'Password'}
        handleChange={(e) => {
          const change = handleInputChange({key: "password", value: e.target.value})
          dispatcher(change)}}
        />
        <Button
        text={"Log in"}
        handleClick={ValidateLogin}
        />
      </div>
      <div className='flex center login-switch'>
        <p className='text-sm'>Don't have an account? </p> 
        <Link 
        className='text-sm switch-link'
        to="/signup"
        onClick={()=>{
          const switchSignup = switchToSignup()
          dispatcher(switchSignup)
        }}
        >
          Sign up
        </Link>
      </div>
    </div>
  )
}

export default Login