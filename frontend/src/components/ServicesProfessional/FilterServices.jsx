import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { onClearFilters } from "../../store/servicesProf/loadServicesSlice"

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

  const selectedCategorie = [...filters.categories];
  return (
    <>
      {showCategories && (
        <div className="absolute w-64 h-96 left-20 top-16 bg-yellow-300">
          <div className="bg-violet-50 rounded-lg flex flex-col items-center p-8">
            {
              <div>
                <h3>Categorías</h3>
                {categorias.map((category) => {

                  const checked = selectedCategories.includes(
                    category.toUpperCase(),
                  )
                  return (
                    <label key={category} className="flex p-2">
                      <input
                        className="flex mx-5"
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
          </div>
          <button onClick={handleApplyFilters}>Aplciar filtros</button>
        </div>
      )}
    </>
  )
}

export default FilterServices
