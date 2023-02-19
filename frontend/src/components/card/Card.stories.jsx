import React from "react"

import Card from "."

export default {
  title: "Components/bothFlows/registerForm/card/Card",
  component: Card,
  args: {},
  argTypes: {
    imageSide: {
      control: {
        type: "select",
        options: ["left", "right"],
      },
    },
  },
}

const Template = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {}

export const ImageOnRight = Template.bind({})
ImageOnRight.args = {
  imageSide: "right",
}
