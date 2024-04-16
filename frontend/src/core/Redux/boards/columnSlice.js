import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boardId: "",
  columns: []
}

const columnSlice = createSlice({
  initialState,
  name: "columnSlice",
  reducers: {
    setColumns: (state, action) => {
      const { boardId, columns } = action.payload
      return { ...state, boardId: boardId, columns: [...columns] }
    }
  }
})

export const { setColumns } = columnSlice.actions

export const columnSliceName = columnSlice.name

export default columnSlice.reducer