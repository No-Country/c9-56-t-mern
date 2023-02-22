import { BsTelephoneFill } from "react-icons/bs"
import { HiLocationMarker } from "react-icons/hi"
import InputImage from "../InputImage/InputImage"
import PencilIcon from "../PencilIcon"

const ProfileInfo = ({
  urlImage,
  handleImageChange,
  name,
  lastname,
  handleEdit,
  personalInfo,
}) => {
  const iconsByType = {
    address: <HiLocationMarker size={20} className="scale-110" />,
    phone: <BsTelephoneFill size={20} />,
  }

  return (
    <>
      <div className="pb-9">
        <InputImage urlImage={urlImage} handleImageChange={handleImageChange} />
      </div>

      <div className="flex justify-between items-center">
        <h2 className="font-title text-title text-neutral-900">
          {name} {lastname}
        </h2>

        <span onClick={handleEdit}>
          <PencilIcon />
        </span>
      </div>

      <div className="py-3 flex flex-col gap-5">
        {personalInfo.map(({ type, value }) => (
          <div className="flex gap-2 items-center" key={`${type}${value}`}>
            <span className="text-violet-700">{iconsByType[type]}</span>
            <span className="font-body text-body text-neutral-900">
              {value}
            </span>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProfileInfo
