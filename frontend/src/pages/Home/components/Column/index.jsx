import React from 'react';
import Task from '../Task';
import { Droppable } from 'react-beautiful-dnd';


const Column = ({title, tasks, id}) => {
  return (
    <div className='board-column'>
      <h3>{title}</h3>
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <div
        ref={provided.innerRef}
        {...provided.droppableProps}
        isDraggingOver={snapshot.isDraggingOver}
        >
          <Task
          task={{
            id: "12",
            title: "assignment",
            description: "make it in tie and deliver it fully functional",
            attachment: "learn it"
          }}
          index={1}
          />
          {provided.placeholder}
        </div>
      )}

    </Droppable>
    </div>
  );
};

export default Column;