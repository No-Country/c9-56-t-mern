import React, { useState, useEffect } from "react"
import SimpleText from "../SimpleText/SimpleText"
import { MdFilterAlt } from "react-icons/md"
import PurpleButton from "../PurpleButton"
import Navbar from "../../pages/shared/Navbar/Navbar"
import { CardServices } from "../CardServices"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import {
  onAddFilter,
  onLoadServices,
} from "../../store/servicesProf/loadServicesSlice"
import FilterServices from "./FilterServices"
import {
  serviceData,
  servicesSlice,
} from "../../store/servicesProf/serviceSlice"
import { useNavigate } from "react-router-dom"
import { useServiceStore } from "../../hooks/useServiceStore"

const ListServices = () => {
  const [showCategories, setShowCategories] = useState(false)
  const [searchText, setSearchText] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { startLoadingServices } = useServiceStore()

  const services = useSelector((state) => state.services.services.services)
  // const serviceIds = services.map((service) => service.id)
  const filters = useSelector((state) => state.services.filters)

   useEffect(() => {
     startLoadingServices()
   }, [])

  const filterServices = (services, filters) => {
    const { categories, petTypes, sizes } = filters

    const filteredServices =
      categories.length > 0
        ? services.filter((service) =>
            categories.includes(service.categoryId),
          )
        : services

    return filteredServices
  }

  const handleShowCategories = () => {
    setShowCategories(!showCategories)
    console.log("HOLAS")
  }

  const handleFilters = (categoryService = "") => {
    if (categoryService != "") {
      dispatch(
        onAddFilter({ filterType: "categories", filterValue: categoryService }),
      )
    }
  }
  const filteredServices =
    searchText === ""
      ? filterServices(services, filters)
      : services.filter(
          (service) =>
            service.name
              .toLowerCase()
              .includes(searchText.toLowerCase()) ||
            service.categoryId
              .toLowerCase()
              .includes(searchText.toLowerCase()),
        )

  const handleServiceSelect = (serviceSelect) => {
    dispatch(serviceData({ serviceSelect }))
    navigate("/serviceInfo")
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col mb-8  justify-center items-center">
        <SimpleText title={"Servicios"} />

        <div className="flex flex-row border rounded-xl p-2 w-80 h-9 items-center mb-4">
          <input
            type="text"
            className="flex w-72 h-6"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
          <div>
            <MdFilterAlt className="w-6 h-6" onClick={handleShowCategories} />
            {showCategories && (
              <FilterServices
                showCategories={showCategories}
                setShowCategories={setShowCategories}
                applyFilters={handleFilters}
              />
            )}
          </div>
        </div>

        <PurpleButton text={"Todas las categorias"} />
      </div>

      <div className="flex flex-col p-4 h-48 gap-6">
        {Array.isArray(filteredServices) && filteredServices.map((service) => (
          <CardServices
            key={service.id}
            urlImage={service.image}
            serviceName={service.name}
            onClick={() => handleServiceSelect(service)}
          />
        ))}
      </div>
    </>
  )
}

export default ListServices
