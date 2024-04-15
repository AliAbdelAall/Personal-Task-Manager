import React, { useState } from 'react'
import "./style.css"

//components
import AddInput from '../../../components/AddInput'
import AddButton from '../../../components/AddButton'

// Utilities
import { sendRequest } from '../../../core/Utilities/remote/request'
import { requestMethods } from '../../../core/Enums/requestMethods'

// Libraries
import {toast} from "react-toastify"

const MyBoards = () => {
  const [boardInput, setBoardInput] = useState("")
  const [tagInput, setTagInput] = useState("")

  console.log(boardInput, tagInput)

  const handleAddBoard = () => {
    sendRequest(requestMethods.POST, '/users/add-board', {
      name: boardInput
    }).then((response) => {
      if(response.status === 201){
        toast.success("Tag saved Successfully")
      }
    }).catch((error) => {
      toast.error("Something went wrong ...")
    })
  }

  return (
    <div className='flex column my-boards-container'>
      <div className='flex column'>
        <h3>username</h3>
        <p >Email</p>
      </div>
      <div className='flex space-around wrap boards-divs'>
        <div className='div-container'>
          <div className='flex column'>
            <h2>My Boards</h2>
            <div className='flex'>
              <AddInput
              type={"text"}
              placeholder={"Add board"}
              handleChange={(e) => setBoardInput(e.target.value)}
              />
             {boardInput && <AddButton
              text={"Add"}
              />}
            </div>
          </div>
          <div className='flex column names-container'>
            <div className='created-name'>board Name</div>
            <div className='created-name'>board Name</div>
            <div className='created-name'>board Name</div>
            <div className='created-name'>board Name</div>
          </div>
        </div>

        <div className='div-container tags'>
          <div className='flex column'>
            <h2>My tags</h2>
            <div className='flex wrap'>
              <AddInput
              type={"text"}
              placeholder={"Add tag"}
              handleChange={(e) => setTagInput(e.target.value)}
              />
              {tagInput && <AddButton
              text={"Add"}
              handleClick={handleAddBoard}
              />}
            </div>
          </div>
          <div className='flex column names-container'>
            <div className='created-name'>Tag Name</div>
            <div className='created-name'>Tag Name</div>
            <div className='created-name'>Tag Name</div>
            <div className='created-name'>Tag Name</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyBoards