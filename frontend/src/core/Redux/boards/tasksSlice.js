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
      state.count = 0;
      state.done = 0;
      state.rest = 0;

      state.tasks = action.payload.map(task => {
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
    },

    addTask: (state, action) => {
      state.count++
      state.rest++
      state.tasks.push(action.payload)
    }
  }
})

export const { setTasks, addTask } = tasksSlice.actions

export const tasksSliceName = tasksSlice.name

export default tasksSlice.reducer