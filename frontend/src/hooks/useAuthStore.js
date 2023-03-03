import { useDispatch, useSelector } from "react-redux"
import pawfulApi from "../api/pawfulApi"
import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout,
} from "../store/auth/authSlice"
import { getProfile } from "../store/profile/profileSlice"

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth)

  const dispath = useDispatch()

  const startLogin = async ({ email, password }) => {
    dispath(onChecking())

    try {
      const data = await pawfulApi.post("/auth/login", { email, password })
      localStorage.setItem("token", data.data.token)
      localStorage.setItem("token-init-date", new Date().getTime())
      const rol = data.data.user.roles

      // console.log(data)
      if (data.status === 201) {
        try {
          const response = await pawfulApi.get("/perfil", {
            headers: {
              Authorization: `Bearer ${data.data.token}`,
            },
          })
          response.data.forEach((profile) => {
            console.log(profile.name)
            dispath(
              getProfile({
                id: profile.id,
                name: profile.name,
                image: profile.image,
                userId: profile.userId,
                phone: profile.phone,
                address: profile.address,
              }),
            )
          })
        } catch (error) {
          console.log(error)
        }
        //  console.log(response.data.name)
      }
      dispath(
        onLogin({
          email: data.data.user.email,
          uid: data.data.user.id,
          role: data.data.user.roles,
          token: data.data.token,
        }),
      )

      return rol

      // console.log(data)
    } catch (error) {
      dispath(onLogout("Credenciales incorrectas"))
      setTimeout(() => {
        dispath(clearErrorMessage())
      }, 10)
    }
  }

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token")
    if (!token) return dispath(onLogout())

    try {
      const { data } = await pawfulApi.post("/auth/login")
      localStorage.setItem("token", token)
      localStorage.setItem("token-init-date", new Date().getTime())
      dispath(onLogin({ name: data.name, uid: data.id }))
    } catch (error) {
      localStorage.clear()
      dispath(onLogout())
    }
  }

  const startLogout = () => {
    localStorage.clear()
    dispath(onLogout())
  }

  return {
    //Propiedades
    status,
    user,
    errorMessage,

    //Metodos
    checkAuthToken,
    startLogin,
    startLogout,
  }
}
