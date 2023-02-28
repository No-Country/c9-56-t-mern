import { BsTelephoneFill } from "react-icons/bs"
import { HiIdentification, HiLocationMarker } from "react-icons/hi"
import Footer from "../../pages/shared/Footer/Footer"
import Navbar from "../../pages/shared/Navbar/Navbar"
import InputImage from "../inputImage/InputImage"
import Panel from "../Panel/Panel"
import PencilIcon from "../PencilIcon"

const ProfileInfo = ({
  urlImage,
  handleImageChange,
  name,
  handleEdit,
  personalInfo,
  editable,
}) => {
  const iconsByType = {
    address: <HiLocationMarker size={20} className="scale-110" />,
    phone: <BsTelephoneFill size={20} />,
    document: <HiIdentification size={20} />,
  }

  return (
    <>
      <Navbar />
      <div className="global-main-container pt-10">
        <InputImage
          urlImage={urlImage}
          handleImageChange={handleImageChange}
          disabled={editable}
        />

        <div className="flex justify-between items-center mt-9 mx-4">
          <h2 className="font-title text-title text-neutral-900">{name}</h2>

          {editable && (
            <span onClick={handleEdit}>
              <PencilIcon />
            </span>
          )}
        </div>

        <div className="py-3 flex flex-col gap-5 mx-4 mb-10">
          {personalInfo.map(({ type, value }) => (
            <div className="flex gap-2 items-center" key={`${type}${value}`}>
              <span className="text-violet-700">{iconsByType[type]}</span>
              <span className="font-body text-body text-neutral-900">
                {value}
              </span>
            </div>
          ))}
        </div>
        <div className="mb-12">
          <Panel
            title={"Mis mascotas"}
            placeholder={"¡Aún no tienes mascotas agregadas!"}
            editable={true}
          />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default ProfileInfo
