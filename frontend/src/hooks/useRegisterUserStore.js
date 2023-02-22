import { useState } from "react"
import { useDispatch } from "react-redux"
import pawfulApi from "../api/pawfulApi"
import { useAuthStore } from "./useAuthStore"

export const useRegisterUSerStore = () => {
  const [resp, setResp] = useState("")
  const [dataResp, setDataResp] = useState({})
  const [tipeProfile, setTipeProfile] = useState("")

  const addUser = async ({ email, password, role }) => {
    try {
      await pawfulApi
        .post("/users", {
          email,
          password,
          role,
        })
        .then((response) => {
          if (response.status === 201) {
            setResp("ok")
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
