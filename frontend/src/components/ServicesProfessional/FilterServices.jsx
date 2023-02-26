import React, { useState } from "react"

const FilterServices = ({ categories, petTypes, sizes, onApplyFilters }) => {
  const [showFilters, setShowFilters] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedPetTypes, setSelectedPetTypes] = useState([])
  const [selectedSizes, setSelectedSizes] = useState([])

  const handleFilters = () => {
    const filter = {
      categories: selectedCategories,
      petTypes: selectedPetTypes,
      sizes: selectedSizes,
    }
    onApplyFilters(filter)
    setShowFilters(false)
  }

  return (
    <div>
      <button onClick={() => setShowFilters(!showFilters)}>
        {showFilters ? "Ocultar filtros" : "Mostrar filtros"}
      </button>
      {showFilters && (
        <div>
          <h3>Categorías</h3>
          {categories.map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedCategories([...selectedCategories, category])
                  } else {
                    selectedCategories(
                      selectedCategories(
                        selectedCategories.filter((c) => c !== category),
                      ),
                    )
                  }
                }}
              />
              {category}
            </label>
          ))}
          <h3>Tipo de mascota</h3>,
          {petTypes.map((petType) => (
            <label key={petType}>
              <input
                type="checkbox"
                checked={selectedPetTypes.includes(petType)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedPetTypes([...selectedPetTypes, petType])
                  } else {
                    setSelectedPetTypes(
                      selectedPetTypes.filter((p) => p !== petType),
                    )
                  }
                }}
              />
              {petType}
            </label>
          ))}
          <h3>Tamaño</h3>
          {sizes.map((size) => (
            <label key={size}>
              <input
                type="checkbox"
                checked={selectedSizes.includes(size)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedSizes([...selectedSizes, size])
                  } else {
                    setSelectedSizes(selectedSizes.filter((s) => s !== size))
                  }
                }}
              />
              {size}
            </label>
          ))}
          <button onClick={handleFilters}>Aplciar filtros</button>
        </div>
      )}
    </div>
  )
}

export default FilterServices
