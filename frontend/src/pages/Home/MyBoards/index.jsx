import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./style.css"

//components
import AddInput from '../../../components/AddInput'
import AddButton from '../../../components/AddButton'

// Redux
import {useDispatch, useSelector} from "react-redux"
import { boardSliceName, addBoard } from '../../../core/Redux/boards/boardsSlice'
import { tagsSliceName, addTag } from '../../../core/Redux/boards/tagsSlice'

// Utilities
import { sendRequest } from '../../../core/Utilities/remote/request'
import { requestMethods } from '../../../core/Enums/requestMethods'

// Libraries
import {toast} from "react-toastify"

const MyBoards = () => {
  const { boards } = useSelector((global) => global[boardSliceName])
  const { tags } = useSelector((global) => global[tagsSliceName])
  const [boardInput, setBoardInput] = useState("")
  const [tagInput, setTagInput] = useState("")
  const dispatcher = useDispatch()
  const navigate = useNavigate()

  const handleAddBoard = () => {
    sendRequest(requestMethods.POST, '/users/add-board', {
      name: boardInput
    }).then((response) => {
      if(response.status === 201){
        toast.success("Board saved Successfully")
        const board = addBoard(response.data.board)
        dispatcher(board)
      }
    }).catch((error) => {
      toast.error("Something went wrong ...")
    })
  }

  const handleAddTag = () => {
    sendRequest(requestMethods.POST, '/users/add-tag', {
      name: tagInput
    }).then((response) => {
      if(response.status === 201){
        toast.success("Tag saved Successfully")
        const tag = addTag(response.data.tag)
        dispatcher(tag)
      }
    }).catch((error) => {
      toast.error("Something went wrong ...")
    })
  }

  const handleBoardClick = (id) =>{
    navigate(`/home/board/${id}`)
  }

  return (
    <div className='flex column my-boards-container container'>
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
              handleClick={handleAddBoard}
              />}
            </div>
          </div>
          <div className='flex column names-container'>

            {boards?.map((board) => (
              <div className='created-name' key={board._id} id={board._id} onClick={(e) => handleBoardClick(e.target.id)}>{board.name}</div>
            ))}

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
              handleClick={handleAddTag}
              />}
            </div>
          </div>
          <div className='flex column names-container'>

            {tags?.map((tag) => (
              <div className='created-name'>{tag.name}</div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default MyBoards