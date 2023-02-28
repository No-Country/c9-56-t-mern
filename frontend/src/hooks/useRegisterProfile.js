import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import pawfulApi from "../api/pawfulApi"
import { getProfile } from "../store/profile/profileSlice"

export const useRegisterProfile = () => {
  const [respBackend, setRespBackend] = useState("")
  const { profile } = useSelector((state) => state.profile)
  const dispatch = useDispatch()

  const registerProfile = async (
    { name, image, phone, address, rol },
    token,
  ) => {
    try {
      const response = await pawfulApi.post(
        "/perfil",
        {
          name,
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

  const registerProfProfessioanl = async (
    { name, dni, image, phone, address, titleCareer, rol },
    token,
  ) => {
    try {
      const response = await pawfulApi.post(
        "/perfil",
        {
          name,
          dni,
          image,
          phone,
          address,
          titleCareer,
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
        // dispatch(
        //   getProfile({
        //     id: response.data.perfil.id,
        //     name: response.data.perfil.name,
        //     dni: response.data.perfil.dni,
        //     image: response.data.perfil.image,
        //     phone: response.data.perfil.phone,
        //     address: response.data.perfil.address,
        //     titleCareer: response.data.perfil.titleCareer,
        //     rol: response.data.perfil.rol,
        //     userId: response.data.perfil.userId,
        //   }),
        // )
        return respBackendRegister
      }
    } catch (error) {}
  }

  return {
    registerProfile,
    respBackend,
    registerProfProfessioanl,
  }
}
