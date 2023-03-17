import React from "react"

const SimpleText = ({ title, paragraph }) => {
  return (
    <div
      className={
        "flex flex-col min-[360px]:gap-3 min-[1023px]:gap-0 min-[1200px]:gap-5 w-full max-w-sm m-auto px-4 min-[1200px]:pt-0 text-center text-neutral-900"
      }
    >
      <h2 className="font-title text-title min-[1000px]:text-lg min-[1280px]:text-title max-[360px]:pt-0 pt-4 lg:pt-0 text-center">
        {title}
      </h2>
      <p className="flex-nowrap w-full text-subtitle font-subtitle min-[1000px]:text-base min-[1200px]:text-subtitle min-[1300px]:pb-[3%]">
        {paragraph}
      </p>
    </div>
  )
}

export default SimpleText
