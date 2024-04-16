import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const tagsSlice = createSlice({
  initialState,
  name: "tagsSlice",
  reducers: {
    setTags: (state, action) => {
      return [...action.payload.tags]
    },

    addTag: (state, action) => {
      return [...state, action.payload.tag]
    }
  }
})

export const { setTags, addTag } = tagsSlice.actions

export const tagsSliceName = tagsSlice.name

export default tagsSlice.reducer