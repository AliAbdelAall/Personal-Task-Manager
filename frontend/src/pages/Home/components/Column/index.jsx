import React from 'react';
import Task from '../Task';
import Button from '../../../../components/Button';

import { columnSliceName } from '../../../../core/Redux/boards/columnSlice';
import {tasksSliceName, addTask} from '../../../../core/Redux/boards/tasksSlice';



const Column = ({title, tasks, id}) => {
  return (
    <div className='flex column column-wrapper'>
      <h3 className='column-title'>{title}</h3>
      <div className='flex column tasks-wrapper'>

        <div className='task-wrapper'>
          <h4>title</h4>
          <p>description</p>
          <small className='text-sm'>#tag</small>
        </div>

        <Task/>

        <Button
        text={"Add Task"}
        />
      </div>
    </div> 
  );
};

export default Column;