import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useAuthStore } from "../../../hooks/useAuthStore"
import { useAddService } from "../../../hooks/useAddService"
import NavbarBack from "../../shared/Navbar/NavbarBack"
import CoverPhoto from "../../../components/CoverPhoto/CoverPhoto"
import InputForm from "../../../components/inputForm/InputForm"
import TextArea from "../../../components/TextArea/TextArea"
import PurpleButton from "../../../components/PurpleButton"

const AddServices = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    const { registerService } = useAddService()

    const onSubmit = async (data) => {
        const { name, presentacionPersonal, presentacion_del_servicio, image } = data

        try {
            const resp = await registerService({
                name,
                presentacion_del_servicio,
                presentacionPersonal,
                image
            })
        } catch (error) {
            console.log(error)

        }
    }

    return (
        <>
            <NavbarBack />
            <CoverPhoto />
            <div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <InputForm
                        label={"Nombre del servicio"}
                        placeholder={"Ingrese el nombre del servicio"}
                        register={...register("name", {})}
                    />

                    <TextArea
                        label={"Sobre el servicio"}
                        placeholder={"Escribe tu descripción aqui"}
                    />
                    <TextArea
                        label={"Sobre ti"}
                        placeholder={"Escribe tu descripción aqui"}
                    />

                    <PurpleButton
                    text={"Guardar datos"}
                    type={"submit"}
                     />
                </form>
            </div>
        </>
    )
}

export default AddServices