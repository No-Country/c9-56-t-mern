import React, { useEffect, useState } from "react"
import { MdFilterAlt } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useServiceStore } from "../../hooks/useServiceStore"
import Navbar from "../../pages/shared/Navbar/Navbar"
import { onAddFilter } from "../../store/servicesProf/loadServicesSlice"
import { serviceData } from "../../store/servicesProf/serviceSlice"
import { CardServices } from "../CardServices"
import SimpleText from "../SimpleText/SimpleText"
import FilterServices from "./FilterServices"

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
        ? services.filter((service) => categories.includes(service.categoryId))
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
            service.name.toLowerCase().includes(searchText.toLowerCase()) ||
            service.categoryId.toLowerCase().includes(searchText.toLowerCase()),
        )

  const handleServiceSelect = (serviceSelect) => {
    dispatch(serviceData({ serviceSelect }))
    navigate("/serviceInfo")
  }

  return (
    <>
      <Navbar />
      <main>
        <div className="flex flex-col mb-8 justify-center items-center">
          <SimpleText title="Servicios" />

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
        </div>

        <div className="flex flex-col p-4 h-48 gap-6">
          {Array.isArray(filteredServices) &&
            filteredServices.map((service) => (
              <CardServices
                key={service.id}
                urlImage={service.image}
                serviceName={service.name}
                onClick={() => handleServiceSelect(service)}
              />
            ))}
        </div>
      </main>
    </>
  )
}

export default ListServices
