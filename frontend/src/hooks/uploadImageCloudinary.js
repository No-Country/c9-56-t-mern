import { useState } from "react";
import axios from "axios"

const uploadIageDataForm = () => {

    const [urlImage, setUrlIMage] = useState('');
    const upImage = async (data) => {

        const formData = new FormData();
        formData.append("file", data.avatar)
        formData.append("upload_preset", "v3mcaqee")
        formData.append("cloud_name", "dvm4qew1i")

        try {
            await axios
                .post(
                    "https://api.cloudinary.com/v1_1/dvm4qew1i/image/upload",
                    formData,
                    {
                        headers: { "X-Requested-With": "XMLHttpRequest" },
                    },
                )
                .then((response) => {

                    setUrlIMage(response.data.secure_url)
                })
        } catch (error) {
            console.log("Error al subir la imagen", error)
        }

        // addUSer({
        //     email: data.email,
        //     password: data.password,
        //     avatar: data.avatar,
        //     role: data.role,
        // })

        // navigate("/success")
    }
    return {
        upImage,
        urlImage
    }
}

export default uploadIageDataForm;