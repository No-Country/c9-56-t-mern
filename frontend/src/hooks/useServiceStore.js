import { useDispatch, useSelector } from "react-redux"
import pawfulApi from "../api/pawfulApi"
import { useState, useEffect } from "react"
import { loadServiesSlice } from "../store/servicesProf/loadServicesSlice"

export const useServiceStore = () => {
  const dispatch = useDispatch()
  const startLoadingServices = async () => {
    try {
      const { data } = await pawfulApi.get("/services")
      const services = data.services
      dispatch(loadServiesSlice(services))
    } catch (error) {
      console.log("Error al cargar los datos")
    }
  }

  return {
    startLoadingServices,
  }
}
