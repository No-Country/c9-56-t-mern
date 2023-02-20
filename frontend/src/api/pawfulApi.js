import axios from "axios"

const pawfulApi = axios.create({
  // baseURL: `${API_URL_PAWFUL}`
  baseURL: "http://localhost:3000/api",
})

pawfulApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")

  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    }
  }

  return config
})

export default pawfulApi
