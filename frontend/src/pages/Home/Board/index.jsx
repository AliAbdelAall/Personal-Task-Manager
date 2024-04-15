import React, { useState } from 'react';
import Column from '../components/Column';
import "./style.css"
import { DragDropContext } from 'react-beautiful-dnd';

const Board = () => {
  const [complete, setComplete] = useState([])
  const [inComplete, setInComplete] = useState([])

  return (
    <DragDropContext>
      <div className='flex board-wrapper'>

        <Column
        title={"To-Do"}
        tasks={inComplete}
        id={"1"}
        />
        <Column
        title={"In-Progress"}
        tasks={inComplete}
        id={"2"}
        />
        <Column
        title={"Done"}
        tasks={complete}
        id={"3"}
        />

      </div>
    </DragDropContext>
  );
};

export default Board;
