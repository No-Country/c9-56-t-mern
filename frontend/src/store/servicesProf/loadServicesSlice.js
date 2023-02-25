import { createSlice } from "@reduxjs/toolkit"

export const loadServiesSlice = createSlice({
  name: "services",
  initialState: {
    services: [],
  },
  reducers: {
    onLoadServices: (state, { payload = [] }) => {
      state.services = payload
    },
  },
})

export const { onLoadServices } = loadServiesSlice.actions
