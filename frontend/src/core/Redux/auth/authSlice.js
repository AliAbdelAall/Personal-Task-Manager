import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  username: "",
  password: "",
  isLogin: true,
  error: false,
  errorMessage: ""
}

const authSlice = createSlice({
  initialState,
  name: 'authSlice',
  reducers: {
    switchToSignup: (state, action) => {
      Object.assign(state, initialState)
      state.isLogin = false
    },

    switchToLogin: (state, action) => {
      Object.assign(state, initialState)
    },

    handleInputChange: (state, action) => {
      const { key, value } = action.payload
      state[key] = value
      state.error = false
      state.errorMessage = ""
    },

    setError: (state, action) => {
      state.error = true
      state.errorMessage = action.payload
    },

    resetError: (state, action) => {
      state.error = false
      state.errorMessage = ""
    }
  }
})

export const {
  switchToSignup,
  switchToLogin,
  handleInputChange,
  setError,
  resetError
} = authSlice.actions

export const authSliceName = authSlice.name

export default authSlice.reducer