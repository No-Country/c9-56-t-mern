import React from "react"

import Stepper1 from "./Stepper1"

export default {
  title: "Components/Stepper1",
  component: Stepper1,
  args: {},
}

const Template = (args) => <Stepper1 {...args} />

export const Default = Template.bind({})
Default.args = {}
