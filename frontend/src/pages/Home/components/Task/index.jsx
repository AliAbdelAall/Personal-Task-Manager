import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ tag, task, index }) => {

  const isDragging = () => {
    
  }

  return (
    <Draggable draggableId={task.id} key={task.id} index={index}>
      {(provided, snapshot) => (

        <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        
        ref={provided.innerRef}
        isDragging={snapshot.isDragging}

        >
          <p>{tag}</p>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <p>{task.attachment}</p>

          {provided.placeholder}
        </div>

      )}
    </Draggable>
  );
};

export default Task;