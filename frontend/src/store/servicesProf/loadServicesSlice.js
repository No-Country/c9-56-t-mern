import { createSlice } from "@reduxjs/toolkit"

export const loadServiesSlice = createSlice({
  name: "services",
  initialState: {
    name: "services",
    services: [],
    filters: {
      categories: [],
      petTypes: [],
      sizes: [],
    },
  },
  reducers: {
    onLoadServices: (state, { payload = [] }) => {
      state.services = payload
    },
    onAddFilter: (state, { payload }) => {
      const { filterType, filterValue } = payload
      if (state.filters[filterType]) {
        state.filters[filterType] =
          state.filters[filterType].concat(filterValue)
      } else {
        state.filters[filterType] = [filterValue]
      }
    },
    onRemoveFilter: (state, { payload }) => {
      const { filterType, filterValue } = payload
      const index = state.filters[filterType].indexOf(filterValue)
      if (index !== -1) {
        state.filters[filterType].splice(index, 1)
      }
    },
    onClearFilters: (state) => {
      state.filters = {
        categories: [],
        petTypes: [],
        sizes: [],
      }
    },
  },
})

export const { onLoadServices, onAddFilter, onRemoveFilter, onClearFilters } =
  loadServiesSlice.actions
