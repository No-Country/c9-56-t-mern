import React from "react"

import CoverPhoto from "./CoverPhoto"

export default {
  title: "Components/CoverPhoto",
  component: CoverPhoto,
  args: {
    onChange: () => {},
  },
}

const Template = (args) => <CoverPhoto {...args} />

export const SampleImage = Template.bind({})
SampleImage.args = {
  urlImage: "https://res.cloudinary.com/axiever/image/upload/v1677294197/Rectangle_9_jqma0v.png",
}

export const NoImage = Template.bind({})
NoImage.args = {}
