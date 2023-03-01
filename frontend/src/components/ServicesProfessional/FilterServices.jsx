import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { onClearFilters } from "../../store/servicesProf/loadServicesSlice"
import PurpleButton from "../PurpleButton"

const categorias = [
  "Peluqueria",
  "Pasteleria",
  "Guarderia",
  "Paseos",
  "Fiestas",
]

const FilterServices = ({
  showCategories,
  setShowCategories,
  applyFilters,
}) => {
  const [selectedCategories, setSelectedCategories] = useState([])

  const filters = useSelector((state) => state.services.filters)
  const dispatch = useDispatch()

  const handleCategoryChange = (event) => {
    const { categories } = filters
    const { value, checked } = event.target
    const category = value.toUpperCase()

    if (checked) {
      setSelectedCategories((prevCategories) => {
        if (prevCategories.includes(category)) {
          return prevCategories
        } else {
          return [...prevCategories, category]
        }
      })
      dispatch({
        type: "services/onAddFilter",
        payload: {
          filterType: "categories",
          filterValue: category,
        },
      })
    } else {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((c) => c !== category),
      )
      dispatch({
        type: "services/onRemoveFilter",
        payload: {
          filterType: "categories",
          filterValue: category,
        },
      })
    }
    console.log(categorias)
  }

  const handleApplyFilters = () => {
    dispatch(onClearFilters())
    applyFilters(selectedCategories)
    setShowCategories(false)
    console.log("HOLA")
  }

  useEffect(() => {
    setSelectedCategories([...filters.categories])
  }, [filters.categories])

  return (
    <>
      {showCategories && (
        <div className="relative">
          <div className="absolute w-64 h-96 right-0 top-2">
            <div className="bg-violet-50 rounded-lg flex flex-col py-6">
              {
                <div className="px-4">
                  <h3>Filtrar por:</h3>
                  <hr className="mt-2" />
                  {categorias.map((category) => {
                    const checked = selectedCategories.includes(
                      category.toUpperCase(),
                    )
                    return (
                      <label key={category} className="flex pt-2">
                        <input
                          className="flex mr-5 border-[#5B21B6]"
                          id="category"
                          value={category}
                          type="checkbox"
                          checked={
                            checked
                            // ? selectedCategories.includes(...selectedCategorie, category.toUpperCase())
                            // : selectedCategories.includes(
                            //   category.toUpperCase(),
                            // )
                          }
                          onChange={handleCategoryChange}
                        />
                        {category}
                      </label>
                    )
                  })}
                </div>
              }
              <button onClick={handleApplyFilters} className="mt-3 w-full ">
                <PurpleButton
                  className="mx-0"
                  onClick={handleApplyFilters}
                  text="Aplicar filtros"
                  type="button"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FilterServices
