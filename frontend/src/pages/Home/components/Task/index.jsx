import React from 'react';


const Task = ({ title, description, tag }) => {

  return (
    <div className='task-wrapper'>
      <h4>title</h4>
      <p>description</p>
      <small className='text-sm'>#tag</small>
    </div> 
  );
};

export default Task;