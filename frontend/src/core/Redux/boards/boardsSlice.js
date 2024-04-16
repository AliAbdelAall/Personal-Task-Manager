import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const boardSlice = createSlice({
  initialState,
  name: "boardSlice",
  reducers: {
    setBoards: (state, action) => {
      return [...action.payload.boards]
    },
    addBoard: (state, action) => {
      return [...state, action.payload.board]
    }
  }
})

export const { setBoards, addBoard } = boardSlice.actions

export const boardSliceName = boardSlice.name

export default boardSlice.reducer