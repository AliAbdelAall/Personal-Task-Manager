import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import authSliceReducer, { authSliceName } from "./auth/authSlice"
import userSliceReducer, { userSliceName } from "./user/useSlice"

export const store = configureStore({
  reducer: {
    [authSliceName]: authSliceReducer,
    [userSliceName]: userSliceReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
