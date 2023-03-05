import axios from "axios"

const pawfulApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL_PAWFUL || "http://localhost:3000/api",
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
