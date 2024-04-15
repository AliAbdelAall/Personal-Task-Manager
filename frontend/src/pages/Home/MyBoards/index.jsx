import React from 'react'
import "./style.css"
import AddInput from '../../../components/AddInput'
import AddButton from '../../../components/AddButton'

const MyBoards = () => {
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
              />
              <AddButton
              text={"Add"}
              />
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
              />
              <AddButton
              text={"Add"}
              />
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