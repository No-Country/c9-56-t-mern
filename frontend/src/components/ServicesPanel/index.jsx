import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import pawfulApi from "../../api/pawfulApi"
import { CardServices } from "../CardServices"
import LoadingSpinner from "../LoadingSpinner"
import Panel from "../Panel/Panel"

const ServicesPanel = ({ profileId, own }) => {
  const [services, setServices] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    const abortController = new AbortController()
    const { signal } = abortController

    const fetchPets = async () => {
      try {
        const { data } = await pawfulApi.get("/services", {
          signal,
          params: {
            profileId,
          },
        })

        setServices(data)
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

  if (!services) {
    return (
      <div className="w-full h-full grid place-content-center py-10">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <Panel
      title={own ? "Mis Servicios" : "Servicios"}
      placeholder="¡Aún no hay servicios agregados!"
      editable={own}
    >
      {services.length > 0 && (
        <div className="flex flex-col gap-5 w-full py-4">
          {services.map(({ image, presentacion_del_servicio, id }) => (
            <div className="">
              <CardServices
                urlImage={image}
                serviceName={presentacion_del_servicio}
                key={id}
              />
            </div>
          ))}
        </div>
      )}
    </Panel>
  )
}

export default ServicesPanel
