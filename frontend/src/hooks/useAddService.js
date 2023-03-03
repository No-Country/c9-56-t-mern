import pawfulApi from "../api/pawfulApi"

export const useAddService = () => {
  const registerService = async (
    {
      name,
      presentacionPersonal,
      presentacion_del_servicio,
      image,
      profileId,
      categoryId,
    },
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
          categoryId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )

      if (response.status === 201) {
        const respBack = "ok"
        return respBack
      }
    } catch (error) {
      console.log(error)
    }
  }
  return {
    registerService,
  }
}
