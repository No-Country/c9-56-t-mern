import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "./auth/authSlice"
import registerSlice from "./register/registerSlice"
import { profileSlice } from "./profile/profileSlice"
import {
  loadServiesSlice,
  loadCategory,
} from "./servicesProf/loadServicesSlice"
import { servicesSlice } from "./servicesProf/serviceSlice"

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    register: registerSlice.reducer,
    profile: profileSlice.reducer,
    services: loadServiesSlice.reducer,
    service: servicesSlice.reducer,
    category: loadCategory.reducer,
  },
})
