import { configureStore } from "@reduxjs/toolkit"

// Slices
import authSliceReducer, { authSliceName } from "./auth/authSlice"
import userSliceReducer, { userSliceName } from "./user/useSlice"
import boardSliceReducer, { boardSliceName } from "./boards/boards"

// Logger
import logger from "redux-logger"


export const store = configureStore({
  reducer: {
    [authSliceName]: authSliceReducer,
    [userSliceName]: userSliceReducer,
    [boardSliceName]: boardSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
