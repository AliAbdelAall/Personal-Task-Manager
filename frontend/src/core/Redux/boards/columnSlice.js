import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  columns: []
}

const columnSlice = createSlice({
  initialState,
  name: "columnSlice",
  reducers: {
    setColumns: (state, action) => {
      console.log(action.payload)
      return { ...state, columns: [...action.payload] }
    },

    addColumn: (state, action) => {
      return { ...state, columns: [...state.columns, action.payload] }
    },
  }
})

export const { setColumns, addColumn } = columnSlice.actions

export const columnSliceName = columnSlice.name

export default columnSlice.reducer