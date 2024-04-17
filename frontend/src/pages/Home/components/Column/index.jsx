import React, { useState } from 'react';

// Components
import Task from '../Task';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';

// Redux
import { columnSliceName } from '../../../../core/Redux/boards/columnSlice';
import { tasksSliceName, addTask } from '../../../../core/Redux/boards/tasksSlice';
import { tagsSliceName } from '../../../../core/Redux/boards/tagsSlice';
import { useSelector } from 'react-redux';



const Column = ({title, id}) => {

  const { tasks } = useSelector((global) => global[tasksSliceName])
  const { tags } = useSelector((global) => global[tagsSliceName])
  const columnTasks = tasks.filter((task) => task.columnId === id)
  console.log(columnTasks)
  console.log(id)
  const [taskInputs, setTaskInputs] = useState({title: "", description: "", tagId: ""})
  const [isTaskAdd, setIsTaskAdd] = useState(false)
  console.log(tags, tasks)

  const handleTaskInputChange = () => {
    
  }

  const handleAddTask = () => {

  }

  const handleTagchange = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className='flex column column-wrapper'>
      <h3 className='column-title'>{title}</h3>
      <div className='flex column tasks-wrapper'>

        {columnTasks?.map((task)=>(
          <Task
          title={task.task.title}
          description={task.task.description}
          tag={task.task.tag.name}
          />
          
          ))
        }
       {isTaskAdd && <div>
          <Input
          placeholder={"title"}
          />

          <Input
          placeholder={"description"}
          />
          
          <select onChange={(e) => handleTagchange(e)}>
            <option value="">Tags</option>
            {tags?.map((tag) => (
              <option value={tag._id}>{tag.name}</option>
            ))}
          </select>
        </div>}

        <Button
        text={isTaskAdd?"Confirm":"Add Task"}
        handleClick={() => {
          if(!isTaskAdd){
            setIsTaskAdd(true)
          }else{
            handleAddTask()
            setIsTaskAdd(false)
          }
        }}
        />
      </div>
    </div> 
  );
};

export default Column;