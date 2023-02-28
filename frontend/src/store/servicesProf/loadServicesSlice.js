import { createSlice } from "@reduxjs/toolkit"
const tempServices = [
  {
    id: "1231",
    urlImageService:
      "https://images.unsplash.com/photo-1677224460986-8cb89dbccab7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    nameService: "Cuatro pelos",
    categoryService: "PELUQUERIA",
    aboutService: "",
    aboutMe: "",
    petType: "gato",
    size: "pequeño",
  },
  {
    id: "1232",
    urlImageService:
      "https://images.unsplash.com/photo-1677224460986-8cb89dbccab7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    nameService: "Catering saludable",
    categoryService: "PASTELERIA",
    aboutService: "",
    aboutMe: "",
    petType: "perro",
    size: "mediano",
  },
  {
    id: "1233",
    urlImageService:
      "https://images.unsplash.com/photo-1677224460986-8cb89dbccab7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    nameService: "Paseador de perros",
    categoryService: "PASEOS",
    aboutService: "",
    aboutMe: "",
    petType: "perro",
    size: "pequeño",
  },
  {
    id: "1234",
    urlImageService:
      "https://images.unsplash.com/photo-1677224460986-8cb89dbccab7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    nameService: "Fiestas peludas",
    categoryService: "GUARDERIA",
    aboutService: "",
    aboutMe: "",
    petType: "gato",
    size: "grande",
  },
  {
    id: "1235",
    urlImageService:
      "https://images.unsplash.com/photo-1677224460986-8cb89dbccab7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    nameService: "Hotel para perros",
    categoryService: "GUARDERIA",
    aboutService: "",
    aboutMe: "",
    petType: "canguro",
    size: "pequeño",
  },
  {
    id: "1236",
    urlImageService:
      "https://images.unsplash.com/photo-1677224460986-8cb89dbccab7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    nameService: "Hotel para perros",
    categoryService: "GUARDERIA",
    aboutService: "",
    aboutMe: "",
    petType: "canguro",
    size: "pequeño",
  },
]

export const loadServiesSlice = createSlice({
  name: "services",
  initialState: {
    name: "services",
    services: tempServices,
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
