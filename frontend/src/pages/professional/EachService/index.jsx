import React, { useState } from "react"
import Navbar from "../../shared/Navbar/Navbar"
import CoverPhoto from "../../../components/CoverPhoto/CoverPhoto"
import Panel from "../../../components/Panel/Panel"
import { MdKeyboardArrowRight, MdPerson } from "react-icons/md"
import SimpleText from "../../../components/SimpleText/SimpleText"
import TextArea from "../../../components/TextArea/TextArea"
import PurpleButton from "../../../components/PurpleButton/"
import Footer from "../../../pages/shared/Footer/Footer"

const EachService = () => {
  const gato =
    "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg"
  return (
    <>
      <Navbar />
      <div>
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

          <div className="flex flex-row p-4 gap-3 overflow-x-auto whitespace-nowrap hide-scroll-bar">
            <div className="rounded-2xl w-24 h-40 items-center shadow-2xl bg-green-200 p-2">
              <div className="flex w-20 h-20  bg-red-200 rounded-t-2xl justify-center">
                <img
                  src={gato}
                  alt=""
                  className="flex rounded-full shadow-2xl h-20 w-20"
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <p className="flex text-2xl justify-center items-center">
                  Peludos
                </p>
              </div>
            </div>

            <div className="rounded-2xl w-24 h-40 items-center shadow-2xl bg-green-200 p-2">
              <div className="flex w-20 h-20  bg-red-200 rounded-t-2xl justify-center">
                <img
                  src={gato}
                  alt=""
                  className="flex rounded-full shadow-2xl h-20 w-20"
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <p className="flex text-2xl justify-center items-center">
                  Peludos
                </p>
              </div>
            </div>

            <div className="rounded-2xl w-24 h-40 items-center shadow-2xl bg-green-200 p-2">
              <div className="flex w-20 h-20  bg-red-200 rounded-t-2xl justify-center">
                <img
                  src={gato}
                  alt=""
                  className="flex rounded-full shadow-2xl h-20 w-20"
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <p className="flex text-2xl justify-center items-center">
                  Peludos
                </p>
              </div>
            </div>

            <div className="rounded-2xl w-24 h-40 items-center shadow-2xl bg-green-200 p-2">
              <div className="flex w-20 h-20  bg-red-200 rounded-t-2xl justify-center">
                <img
                  src={gato}
                  alt=""
                  className="flex rounded-full shadow-2xl h-20 w-20"
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <p className="flex text-2xl justify-center items-center">
                  Peludos
                </p>
              </div>
            </div>

            <div className="rounded-2xl w-24 h-40 items-center shadow-2xl bg-green-200 p-2">
              <div className="flex w-20 h-20  bg-red-200 rounded-t-2xl justify-center">
                <img
                  src={gato}
                  alt=""
                  className="flex rounded-full shadow-2xl h-20 w-20"
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <p className="flex text-2xl justify-center items-center">
                  Peludos
                </p>
              </div>
            </div>

            <div className="rounded-2xl w-24 h-40 items-center shadow-2xl bg-green-200 p-2">
              <div className="flex w-20 h-20  bg-red-200 rounded-t-2xl justify-center">
                <img
                  src={gato}
                  alt=""
                  className="flex rounded-full shadow-2xl h-20 w-20"
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <p className="flex text-2xl justify-center items-center">
                  Peludos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default EachService