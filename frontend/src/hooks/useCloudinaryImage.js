import { useState } from "react"
import axios from "axios"

const useCloudinaryImage = () => {
  const [urlImage, setUrlImage] = useState("")

  const uploadImage = async (data) => {
    console.log(data)
    const formData = new FormData()
    formData.append("file", data.image)
    formData.append("upload_preset", "v3mcaqee")
    formData.append("cloud_name", "dvm4qew1i")

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dvm4qew1i/image/upload",
        formData,
      )
      const imageUrlCloud = response.data.secure_url
      setUrlImage(response.data.secure_url)
      return imageUrlCloud
    } catch (error) {
      console.log("Error al subir la imagen", error)
    }
  }
  return {
    urlImage,
    uploadImage,
  }
}

export default useCloudinaryImage
