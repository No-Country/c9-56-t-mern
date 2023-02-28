import React from "react"

import RegisterProfessional from "."

export default {
  title: "professional/RegisterProfessional",
  component: RegisterProfessional,
  args: {},
}

const Template = (args) => <RegisterProfessional {...args} />

export const Default = Template.bind({})
Default.args = {}
