import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  count: 0,
  done: 0,
  rest: 0
}

const tasksSlice = createSlice({
  initialState,
  name: "tasksSlice",
  reducers: {
    setTasks: (state, action) => {
      const newTasks = action.payload.map(task => {
        state.count++;
        if (task.completed) {
          state.done++;
        } else {
          state.rest++;
        }
        return {
          ...task
        };
      });

      state.tasks = [...newTasks];
    },

    addTask: (state, action) => {
      return [...state, action.payload.task]
    }
  }
})

export const { setTasks, addTask } = tasksSlice.actions

export const tasksSliceName = tasksSlice.name

export default tasksSlice.reducer