import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import pawfulApi from "../../../../api/pawfulApi"
import LoadingSpinner from "../../../../components/LoadingSpinner"
import Panel from "../../../../components/Panel/Panel"
import ProfileInfo from "../../../../components/ProfileInfo"
import useCloudinaryImage from "../../../../hooks/useCloudinaryImage"

const OwnerProfile = () => {
  const [profile, setProfile] = useState()

  const navigate = useNavigate()

  const { urlImage, uploadImage } = useCloudinaryImage()

  useEffect(() => {
    const abortController = new AbortController()
    const { signal } = abortController

    const fetchProfile = async () => {
      try {
        const { data } = await pawfulApi.get("/perfil", { signal })

        setProfile(data[0])
      } catch (error) {
        if (!signal.aborted) {
          navigate("/error")
        }
      }
    }

    fetchProfile()

    return () => {
      abortController.abort()
    }
  }, [])

  const handleImageChange = async (e) => {
    setProfile(null)

    try {
      const image = await uploadImage({ image: e.target.files[0] })

      const { data } = pawfulApi.put("/profile", { image })

      setProfile(data[0])
    } catch {
      navigate("/error")
    }
  }

  const handleEdit = () => {
    navigate("/profile/edit")
  }

  if (!profile) {
    return (
      <div className="w-full h-full grid place-content-center py-10">
        <LoadingSpinner />
      </div>
    )
  }

  console.log(profile)

  const { image, name, lastname, address, phone } = profile

  const personalInfo = [
    { type: "address", value: address },
    { type: "phone", value: phone },
  ]

  return (
    <>
      <ProfileInfo
        urlImage={image}
        handleImageChange={handleImageChange}
        name={name}
        lastname={lastname}
        handleEdit={handleEdit}
        personalInfo={personalInfo}
      />
      <div className="py-6">
        <Panel title="Mis Mascotas" placeholder="Añade mascotas" />
      </div>
    </>
  )
}

export default OwnerProfile
