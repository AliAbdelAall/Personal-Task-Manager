import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./style.css"

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { columnSliceName, addColumn } from '../../../core/Redux/boards/columnSlice';
import { boardSliceName } from '../../../core/Redux/boards/boardsSlice';

// Components
import Column from '../components/Column';
import AddButton from '../../../components/AddButton';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { sendRequest } from '../../../core/Utilities/remote/request';
import { requestMethods } from '../../../core/Enums/requestMethods';
import { toast } from 'react-toastify';

// dnd
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

const Board = () => {

  const { columns } = useSelector((global) => global[columnSliceName])
  const { boards } = useSelector((global) => global[boardSliceName])
  const { id: boardId } = useParams()
  const navigate = useNavigate()
  const dispatcher = useDispatch()
  const boardColumns = columns?.filter((column) => column.boardId === boardId)
  const board = boards?.find((board) => board._id === boardId)
  const [columnInput, setColumnInput] = useState("")
  const [isColumnAdd, setIsColumnAdd] = useState(false)
  
  
  const handleBackClick = () => {
    navigate("/home")
  }

  const handleAddColumn = () => {
    sendRequest(requestMethods.POST, '/users/add-column',{
      boardId: boardId,
      title: columnInput
    }).then((response)=>{
      if(response.status === 201){
        const { column } = response.data
        const { tasks, ...rest} = column
        const addedColumn = addColumn({...rest})
        dispatcher(addedColumn)
      }
    }).catch((error)=>{
      console.error(error)
      toast.error("something went wrong")
    })
  }

  return (
    <div className='board-container'>
      <div className='flex board-name'>
        <AddButton
        text={"Back"}
        handleClick={handleBackClick}
        />
        <h2>{board.name}</h2>
      </div>
      <DndProvider backend={HTML5Backend}>
        <div className='flex columns-wrapper'>

          {boardColumns?.map((column)=>(
            <Column
            key={column._id}
            currentColumnId={column._id}
            title={column.title}
            currentBoardId={boardId}
            />
        
          ))
          }
          <div className='column-wrapper'>
            {isColumnAdd && <Input
            placeholder={"title"}
            handleChange={(e) => setColumnInput(e.target.value)}
            />}
            <Button
            text={isColumnAdd?"Confirm":"Add Column"}
            handleClick={() => {
              if(!isColumnAdd){
                setIsColumnAdd(true)
              }else{
                handleAddColumn()
                setIsColumnAdd(false)
              }
            }}
            />
          </div>

        </div>
      </DndProvider>
    </div>
  );
};

export default Board;
