import React from "react"

import ProfessionalDataOne from "./ProfessionalDataOne"

export default {
  title: "RegisterProfessional/ProfessionalDataOne",
  component: ProfessionalDataOne,
  args: {},
}

const Template = (args) => <ProfessionalDataOne {...args} />

export const Default = Template.bind({})
Default.args = {}
