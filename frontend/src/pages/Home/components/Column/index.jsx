import React, { useState } from 'react';

// Components
import Task from '../Task';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';

// Redux
import { columnSliceName } from '../../../../core/Redux/boards/columnSlice';
import { tasksSliceName, addTask } from '../../../../core/Redux/boards/tasksSlice';
import { tagsSliceName } from '../../../../core/Redux/boards/tagsSlice';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from "react-toastify" 

// Utilities
import { sendRequest } from '../../../../core/Utilities/remote/request';
import { requestMethods } from '../../../../core/Enums/requestMethods';



const Column = ({title, currentColumnId, currentBoardId}) => {

  const { tasks } = useSelector((global) => global[tasksSliceName])
  const { tags } = useSelector((global) => global[tagsSliceName])
  const columnTasks = tasks.filter((task) => task.columnId === currentColumnId)
  const [taskInputs, setTaskInputs] = useState({title: "", description: "", tagId: ""})
  const [isTaskAdd, setIsTaskAdd] = useState(false)
  const dispatcher = useDispatch()
  const handleTaskInputChange = (e, field) => {
    setTaskInputs({...taskInputs, [field]: e.target.value})
  }

  const handleAddTask = () => {
    sendRequest(requestMethods.POST, "/users/add-task", {
      ...taskInputs,
      boardId: currentBoardId,
      columnId: currentColumnId,
    }).then((response) => {
      if(response.status === 201){
        const {boardId, columnId, ...rest} = response.data.task
        const newTask = addTask({
          columnId,
          task:{...rest}
        })
        dispatcher(newTask)
      }
    }).catch((error) => {
      toast.error("Please fill all fields to add the task")
    })
  }

  const handleTagchange = (e) => {
    setTaskInputs({...taskInputs, tagId: e.target.value})
  }

  return (
    <div className='flex column column-wrapper'>
      <h3 className='column-title'>{title}</h3>
      <div className='flex column tasks-wrapper'>

        {columnTasks?.map((task)=>(
          <Task
          key ={task.task._id}
          title={task.task.title}
          description={task.task.description}
          tag={task.task.tag.name}
          />
          
          ))
        }
       {isTaskAdd && <div>
          <Input
          placeholder={"title"}
          handleChange={(e) => handleTaskInputChange(e, "title")}
          />

          <Input
          placeholder={"description"}
          handleChange={(e) => handleTaskInputChange(e, "description")}
          />
          
          <select onChange={(e) => handleTagchange(e)}>
            <option value="">Tags</option>
            {tags?.map((tag) => (
              <option key={tag._id} value={tag._id}>{tag.name}</option>
            ))}
          </select>
        </div>}

        <Button
        text={isTaskAdd?"Confirm":"Add Task"}
        handleClick={() => {
          if(!isTaskAdd){
            setIsTaskAdd(true)
          }else{
            setIsTaskAdd(false)
            handleAddTask()
          }
        }}
        />
      </div>
    </div> 
  );
};

export default Column;