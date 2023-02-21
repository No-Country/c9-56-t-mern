import { BsTelephoneFill } from "react-icons/bs"
import { HiLocationMarker } from "react-icons/hi"
import ImageSelector from "../ImageSelector"
import PencilIcon from "../PencilIcon"

const ProfileInfo = ({
  bannerColor,
  urlImage,
  handleImageChange,
  name,
  lastname,
  handleEdit,
  personalInfo,
}) => {
  const iconsByType = {
    address: <HiLocationMarker />,
    phone: <BsTelephoneFill />,
  }

  return (
    <>
      <div
        className="w-full h-[20vh]"
        style={{ backgroundColor: bannerColor }}
      ></div>

      <div className="px-6">
        <div className="-translate-y-1/2">
          <ImageSelector
            urlImage={urlImage}
            handleImageChange={handleImageChange}
          />
        </div>

        <div className="flex justify-between items-center">
          <h2>{`${name} ${lastname}`}</h2>

          <span onClick={handleEdit}>
            <PencilIcon />
          </span>
        </div>

        <div className="py-3">
          {personalInfo.map(({ type, value }) => (
            <div className="flex gap-2 items-center" key={`${type}${value}`}>
              {iconsByType[type]}
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProfileInfo
