import { configureStore } from "@reduxjs/toolkit"
import authSliceReducer, { authSliceName } from "./auth/authSlice"
import userSliceReducer, { userSliceName } from "./user/useSlice"

const store = configureStore({
  reducer: {
    [authSliceName]: authSliceReducer,
    [userSliceName]: userSliceReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
