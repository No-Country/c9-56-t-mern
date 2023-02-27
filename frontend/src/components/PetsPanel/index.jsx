import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import pawfulApi from "../../api/pawfulApi"
import LoadingSpinner from "../LoadingSpinner"
import Panel from "../Panel/Panel"
import PetCard from "../PetCard/PetCard"

const PetsPanel = ({ profileId, own }) => {
  const [pets, setPets] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    const abortController = new AbortController()
    const { signal } = abortController

    const fetchPets = async () => {
      try {
        const { data } = await pawfulApi.get("/pets", {
          signal,
          params: {
            profileId,
          },
        })

        setPets(data)
      } catch {
        if (!signal.aborted) {
          navigate("/error")
        }
      }
    }

    fetchPets()

    return () => {
      abortController.abort()
    }
  }, [])

  if (!pets) {
    return (
      <div className="w-full h-full grid place-content-center py-10">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <Panel
      title={own ? "Mis Mascotas" : "Mascotas"}
      placeholder="¡Aún no hay mascotas agregadas!"
      editable={own}
    >
      {pets.length > 0 && (
        <div className="flex gap-5 py-4 w-full">
          {pets.length > 0 &&
            pets.map(({ photo, name }) => (
              <PetCard urlImage={photo} name={name} />
            ))}
        </div>
      )}
    </Panel>
  )
}

export default PetsPanel
