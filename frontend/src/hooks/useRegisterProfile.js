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

  const registerProfProfessioanl = async (
    { name, lastname, dni, image, phone, address, titleCareer, rol },
    token,
  ) => {
    try {
      const response = await pawfulApi.post(
        "/perfil",
        {
          name,
          lastname,
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
        //     lastname: response.data.perfil.lastname,
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
