import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import pawfulApi from "../../../api/pawfulApi"
import LoadingSpinner from "../../../components/LoadingSpinner"
import PetsPanel from "../../../components/PetsPanel"
import ProfileInfo from "../../../components/ProfileInfo"
import ServicesPanel from "../../../components/ServicesPanel"
import TitlesPanel from "../../../components/TitlesPanel"
import useCloudinaryImage from "../../../hooks/useCloudinaryImage"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

const Profile = () => {
  const { role: roles } = useSelector((state) => state.auth.user)

  const [profile, setProfile] = useState()

  const navigate = useNavigate()

  const { uploadImage } = useCloudinaryImage()

  const { profileRole: routeProfileRole, profileId: routeProfileId } =
    useParams()

  useEffect(() => {
    const abortController = new AbortController()
    const { signal } = abortController

    const fetchProfile = async () => {
      try {
        let url = "/perfil"

        if (routeProfileId) {
          url += `/${routeProfileId}`
        }

        const { data } = await pawfulApi.get(url, { signal })

        setProfile(data[0])
      } catch (error) {
        if (error.response.status === 404) {
          navigate("/register")
        } else if (!signal.aborted) {
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
    if (routeProfileId) return

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
    if (routeProfileId) return

    navigate("/profile/edit")
  }

  if (!profile) {
    return (
      <>
        <Navbar />
        <main className="w-full h-full grid place-content-center py-10">
          <LoadingSpinner />
        </main>
        <Footer />
      </>
    )
  }

  const { image, name, address, phone } = profile

  const personalInfo = [
    { type: "address", value: address },
    { type: "phone", value: phone },
  ]

  const isOwner = routeProfileRole
    ? routeProfileRole === "owner"
    : roles.includes("OWNER")

  if (!isOwner) {
    personalInfo.push({ type: "document", value: profile.dni })
  }

  return (
    <div className="global-main-container">
      <Navbar />
      <main className="px-4">
        <ProfileInfo
          urlImage={image}
          handleImageChange={handleImageChange}
          name={name}
          handleEdit={handleEdit}
          personalInfo={personalInfo}
          editable={!routeProfileId}
        />
        <div className="py-6 flex flex-col gap-10">
          {isOwner && (
            <PetsPanel profileId={profile.id} own={!routeProfileId} />
          )}
          {!isOwner && (
            <ServicesPanel profileId={profile.id} own={!routeProfileId} />
          )}
          {!isOwner && (
            <TitlesPanel
              titleCareers={profile.titleCareer}
              own={!routeProfileId}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Profile
