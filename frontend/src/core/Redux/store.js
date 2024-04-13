import { configureStore } from "@reduxjs/toolkit"
import authSliceReducer, { authSliceName } from "./auth/authSlice"

const store = configureStore({
  reducer: {
    [authSliceName]: authSliceReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
