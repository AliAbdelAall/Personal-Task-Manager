import React, { useState } from 'react';
import './style.css'

import Input from '../../../components/Input';


const Sidebar = () => {
  const [boardInput, setBoardInput] = useState("");


  return (
    <div className={`flex column sidebar `}>
      <div className="username">
          Username
      </div>

      <div>

      <input
      className="board-input"
      placeholder={'Add board'}
      onChange={(e) => setBoardInput(e.target.value)}
      />

      {boardInput && <button className="add-task-btn">
        Add Task
      </button>}
      </div>

      <div className="boards">
        <ul className="boards-list">
          <li className="board-item">Board 1</li>
          <li className="board-item">Board 2</li>
          <li className="board-item">Board 2</li>
          <li className="board-item">Board 2</li>
          <li className="board-item">Board 2</li>
          <li className="board-item">Board 2</li>
          <li className="board-item">Board 2</li>
          <li className="board-item">Board 2</li>
          <li className="board-item">Board 2</li>
          <li className="board-item">Board 2</li>
          <li className="board-item">Board 2</li>
          <li className="board-item">Board 2</li>
          <li className="board-item">Board 2</li>
          <li className="board-item">Board 2</li>
          <li className="board-item">Board 2</li>
          <li className="board-item">Board 2</li>
          <li className="board-item">Board 2</li>
          <li className="board-item">Board 2</li>
          <li className="board-item">Board 2</li>
          <li className="board-item">Board 2</li>
          <li className="board-item">Board 2</li>
          <li className="board-item">Board 2</li>
          <li className="board-item">Board 2</li>
          {/* Add more list items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;