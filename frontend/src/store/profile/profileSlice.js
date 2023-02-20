import { createSlice } from "@reduxjs/toolkit"

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    name: "profile",
    initialState: {
      perfil: {},
    },
  },
  reducers: {
    getProfile: (state, { payload }) => {
      state.perfil = payload
    },
  },
})

export const { getProfile } = profileSlice.actions
