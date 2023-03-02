import pawfulApi from "../api/pawfulApi"

export const useAddService = () => {
  const registerService = async (
    { name, presentacionPersonal, presentacion_del_servicio, image, profileId },
    token,
  ) => {
    try {
      const response = await pawfulApi.post(
        "/services",
        {
          name,
          presentacionPersonal,
          presentacion_del_servicio,
          image,
          profileId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )

      if (response.status === 201) {
        return (respBack = "ok")
      }
    } catch (error) {
      console.log(error)
    }
    return {
      registerService,
    }
  }
}
