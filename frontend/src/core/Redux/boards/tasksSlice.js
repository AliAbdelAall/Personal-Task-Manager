import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  columnId: "",
  tasks: []
}

const tasksSlice = createSlice({
  initialState,
  name: "tasksSlice",
  reducers: {
    setTasks: (state, action) => {
      const { columnId, tasks } = action.payload
      return { ...state, columnId, tasks: [...tasks] }
    },

    addTask: (state, action) => {
      return [...state, action.payload.task]
    }
  }
})

export const { setTasks, addTask } = tasksSlice.actions

export const tasksSliceName = tasksSlice.name

export default tasksSlice.reducer