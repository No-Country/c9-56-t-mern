import { useDispatch, useSelector } from "react-redux"
import pawfulApi from "../api/pawfulApi"
import { useState, useEffect } from "react"
import { getProfile } from "../store/profile/profileSlice"

export const useRegisterProfile = () => {
  const [respBackend, setRespBackend] = useState("")
  const { profile } = useSelector((state) => state.profile)
  const dispatch = useDispatch()

  const registerProfile = async (
    { name, lastname, image, phone, address, rol },
    token,
  ) => {
    console.log(image)
    try {
      const response = await pawfulApi.post(
        "/perfil",
        {
          name,
          lastname,
          image,
          phone,
          address,
          rol,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      if (response.status === 201) {
        const respBackendRegister = "ok"
        dispatch(
          getProfile({
            id: response.data.perfil.id,
            name: response.data.perfil.name,
            lastname: response.data.perfil.lastname,
            image: response.data.perfil.image,
            userId: response.data.perfil.userId,
            phone: response.data.perfil.phone,
            address: response.data.perfil.address,
          }),
        )
        return respBackendRegister
      }
    } catch (error) {
      console.log(error)
    }
  }
  return {
    registerProfile,
    respBackend,
  }
}
