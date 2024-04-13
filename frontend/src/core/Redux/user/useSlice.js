import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  boards: ""
}

const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    setUserInfo: (state, action) => {
      return {
        ...state,
        username: action.payload.username,
        boards: action.payload.boards,
      }
    }
  }
})

export const { setUserInfo } = userSlice.actions