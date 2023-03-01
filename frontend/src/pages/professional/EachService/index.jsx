import React, { useState, useEffect } from "react"
import Navbar from "../../shared/Navbar/Navbar"
import CoverPhoto from "../../../components/CoverPhoto/CoverPhoto"
import Panel from "../../../components/Panel/Panel"
import { MdKeyboardArrowRight, MdPerson } from "react-icons/md"
import SimpleText from "../../../components/SimpleText/SimpleText"
import TextArea from "../../../components/TextArea/TextArea"
import PurpleButton from "../../../components/PurpleButton/"
import Footer from "../../../pages/shared/Footer/Footer"
import { useSelector } from "react-redux"
import Carousel from "../Carousel"

const EachService = () => {
  // const serviceData = useSelector((state) => state.service.serviceData)
  // // const {profileId} = useSelector((state)=>state.services.services)
  // const [detailService, setDetailService] = useState()

  // if (!serviceData) {
  //   return null
  // }
  // const { id,profileId } = serviceData

  // useEffect(() => {
  //   return () => {
  //     effect
  //   };
  // }, [input]);

  const gato =
    "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg"
  return (
    <>
      <Navbar />
      <div className="global-main-container">
        <div className="h-48 bg-green-200 w-full mb-8">
          {/* AQUI VA UNA IMAGEN */}
        </div>

        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-3 items-center">
            <MdPerson className="flex items-center" />
            <SimpleText paragraph={"Mariana Gomez"} />
          </div>
          <div className="flex flex-row items-center  justify-center">
            <SimpleText paragraph={"Conocer"} />
            <MdKeyboardArrowRight />
          </div>
        </div>
        <div className="flex flex-col m-auto max-w-sm mx-4 bg-gray-50 py-4">
          <label
            htmlFor="text-area"
            className="font-subtitle text-subtitle-bold my-2"
          >
            Sobre el servicio
          </label>
          <textarea
            className="border-2 border-neutral-200 rounded-lg p-2 h-32 bg-slate-50 text-caption font-caption"
            name="text-area"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <PurpleButton text={"Iniciar chat"} />

        <div className="flex flex-col p-4">
          <label htmlFor="">Servicios similares</label>

         
<Carousel />
           
           
        </div>
      </div>

      <Footer />
    </>
  )
}

export default EachService
