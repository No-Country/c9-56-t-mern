import React from "react"

import ImageSelector from "."

export default {
  title: "Components/ImageSelector",
  component: ImageSelector,
  args: {
    onChange: () => {},
  },
}

const Template = (args) => <ImageSelector {...args} />

export const SampleImage = Template.bind({})
SampleImage.args = {
  urlImage: "https://www.w3schools.com/howto/img_avatar.png",
}

export const NoImage = Template.bind({})
NoImage.args = {}
