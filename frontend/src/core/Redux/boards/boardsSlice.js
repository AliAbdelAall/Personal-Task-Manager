import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boards: []
}

const boardSlice = createSlice({
  initialState,
  name: "boardSlice",
  reducers: {
    setBoards: (state, action) => {
      return { ...state, boards: [...action.payload] }
    },
    addBoard: (state, action) => {
      return { ...state, boards: [...state.boards, action.payload] }
    }
  }
})

export const { setBoards, addBoard } = boardSlice.actions

export const boardSliceName = boardSlice.name

export default boardSlice.reducer