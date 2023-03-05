import { useDispatch, useSelector } from "react-redux"
import pawfulApi from "../api/pawfulApi"
import { useState, useEffect } from "react"
import {
  loadCategory,
  onLoadServices,
} from "../store/servicesProf/loadServicesSlice"

export const useServiceStore = () => {
  const dispatch = useDispatch()
  const startLoadingServices = async () => {
    try {
      const { data } = await pawfulApi.get("/services")
      const services = data
      // console.log(data)
      dispatch(onLoadServices({ services }))
    } catch (error) {
      console.log("Error al cargar los datos")
    }
  }

  const startLoadingCategories = async () => {
    try {
      const response = await pawfulApi.get("/categories")
      console.log(response)
      const categories = response.data
      // dispatch(loadCategory(categories))
      response.data.data.forEach((profile) => {
        console.log(profile.name)
        dispatch(
          loadCategory({
            id: profile.id,
            name: profile.name,
            description: profile.description,
          }),
        )
      })
    } catch (error) {}
  }

  return {
    startLoadingServices,
    startLoadingCategories,
  }
}
