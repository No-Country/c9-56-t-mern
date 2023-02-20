import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "./auth/authSlice"
import registerSlice from "./register/registerSlice"

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    register: registerSlice.reducer,
  },
})
