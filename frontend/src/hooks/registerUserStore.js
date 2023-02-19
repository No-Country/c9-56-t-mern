import pawfulApi from "../api/pawfulApi"
import { useState } from "react";

export const registerUSerStore = () => {

  const [resp, setResp] = useState('')
  const[dataResp, setDataResp] = useState({})

  const addUSer = async ({ email, password, avatar, role }) => {
    try {
      const { data } = await pawfulApi.post("/users", {
        email,
        password,
        avatar,
        role,
      }).then(response => {
        if (response.status === 201) {
          setResp("ok")
          setDataResp(response.data)
        }else{
          console.log("Se obtuvo un error")
        }
      })
    } catch (error) { }
  }

  return {
    addUSer,
    resp,
    dataResp
  }
}
