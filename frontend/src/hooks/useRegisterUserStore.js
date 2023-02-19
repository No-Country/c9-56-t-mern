import { useDispatch, useSelector } from "react-redux"
import pawfulApi from "../api/pawfulApi"
import { useState } from "react"
import { onChecking, onLogin } from "../store/auth/authSlice"
import { useAuthStore } from "./useAuthStore"

export const useRegisterUSerStore = () => {
  const [resp, setResp] = useState("")
  const [dataResp, setDataResp] = useState({})
  const [tipeProfile, setTipeProfile] = useState("")
  const { startLogin } = useAuthStore()
  const dispatch = useDispatch()

  const addUser = async ({ email, password, avatar, role }) => {
    // dispatch(onChecking())

    try {
      await pawfulApi
        .post("/users", {
          email,
          password,
          avatar,
          role,
        })
        .then((response) => {
          if (response.status === 201) {
            setResp("ok")
            // role === "OWNER" ? setTipeProfile("OWNER") : setTipeProfile("PROFESSIONAL");
            console.log(`RESP: ${resp}`)
          }
        })
    } catch (error) {
      console.log(error)
    }
  }
  return {
    addUser,
    resp,
    dataResp,
  }
}
