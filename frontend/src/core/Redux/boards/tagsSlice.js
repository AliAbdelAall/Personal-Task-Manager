import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: []
}

const tagsSlice = createSlice({
  initialState,
  name: "tagsSlice",
  reducers: {
    setTags: (state, action) => {
      return { ...state, tags: [...action.payload] }
    },

    addTag: (state, action) => {
      return { ...state, tags: [...state.tags, action.payload] }
    }
  }
})

export const { setTags, addTag } = tagsSlice.actions

export const tagsSliceName = tagsSlice.name

export default tagsSlice.reducer