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
        console.log(response)
        const respBackendRegisters = "ok"
        dispatch(
          getProfile({
            id: response.data.perfilProfesional.id,
            name: response.data.perfilProfesional.name,
            dni: response.data.perfilProfesional.dni,
            image: response.data.perfilProfesional.image,
            phone: response.data.perfilProfesional.phone,
            address: response.data.perfilProfesional.address,
            titleCareer: response.data.perfilProfesional.titleCareer,
            rol: response.data.perfilProfesional.rol,
            userId: response.data.perfilProfesional.userId,
          }),
        )
        console.log("LLEGA O NO LLEGA")
        return respBackendRegisters
      }
    } catch (error) {
      console.log(error)
    }
  }

  return {
    registerProfile,
    respBackend,
    registerProfProfessioanl,
  }
}
