import { configureStore } from "@reduxjs/toolkit"

// Slices
import authReducer, { authSliceName } from "./auth/authSlice"
import userReducer, { userSliceName } from "./user/useSlice"
import boardReducer, { boardSliceName } from "./boards/boardsSlice"
import tagsReducer, { tagsSliceName } from "./boards/taskSlice"
import columnReducer, { columnSliceName } from "./boards/columnSlice"

// Logger
import logger from "redux-logger"


export const store = configureStore({
  reducer: {
    [authSliceName]: authReducer,
    [userSliceName]: userReducer,
    [boardSliceName]: boardReducer,
    [tagsSliceName]: tagsReducer,
    [columnSliceName]: columnReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
