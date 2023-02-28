import { createSlice } from "@reduxjs/toolkit"

export const servicesSlice = createSlice({
  name: "service",
  initialState: {
    serviceData: null,
  },
  reducers: {
    serviceData: (state, action) => {
      state.serviceData = action.payload
    },
  },
})

export const { serviceData } = servicesSlice.actions
