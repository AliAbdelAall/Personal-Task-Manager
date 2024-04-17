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

const Board = () => {

  const { columns } = useSelector((global) => global[columnSliceName])
  const { boards } = useSelector((global) => global[boardSliceName])
  const { id: boardId } = useParams()
  const navigate = useNavigate()
  const boardColumns = columns?.filter((column) => column.boardId === boardId)
  const board = boards?.find((board) => board._id === boardId)
  const [columnInput, setColumnInput] = useState("")
  const [isColumnAdd, setisColumnAdd] = useState(false)
  
  
  const handleBackClick = () => {
    navigate("/home")
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
      <div className='flex columns-wrapper'>

        {columns?.map((column)=>(
          <Column
          key={column._id}
          id={column._id}
          title={column.title}
          />
      
        ))
        }
        <div className='column-wrapper'>
          {isColumnAdd && <Input
          placeholder={"title"}
          handleChange={(e) => setColumnInput(e.target.value)}
          />}
          <Button
          text={"Add Column"}
          
          />
        </div>

      </div>
    </div>
  );
};

export default Board;
