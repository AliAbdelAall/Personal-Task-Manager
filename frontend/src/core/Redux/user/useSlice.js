import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: ""
}

const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    setUserInfo: (state, action) => {
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
      }
    }
  }
})

export const { setUserInfo } = userSlice.actions

export const userSliceName = userSlice.name

export default userSlice.reducer