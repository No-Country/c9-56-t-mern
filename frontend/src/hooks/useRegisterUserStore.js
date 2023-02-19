import pawfulApi from "../api/pawfulApi"
import { useState } from "react";

export const useRegisterUSerStore = () => {

  const [resp, setResp] = useState('')
  const [dataResp, setDataResp] = useState({})

  const addUser = async ({ email, password, avatar, role }) => {

    try {
      await pawfulApi.post("/users", {
        email,
        password,
        avatar,
        role,
      }).then((response) => {
        if (response.status === 201) {
          setResp("ok");
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
    dataResp
  }
}
