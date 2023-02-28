import React from "react"

import TittleProfessional from "./TittleProfessional"

export default {
  title: "RegisterProfessional/TittleProfessional",
  component: TittleProfessional,
  args: {},
}

const Template = (args) => <TittleProfessional {...args} />

export const Default = Template.bind({})
Default.args = {}
