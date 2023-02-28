import React from "react"

import ProfessionalDegrees from "./ProfessionalDegrees"

export default {
  title: "RegisterProfessional/ProfessionalDegrees",
  component: ProfessionalDegrees,
  args: {},
}

const Template = (args) => <ProfessionalDegrees {...args} />

export const Default = Template.bind({})
Default.args = {}
