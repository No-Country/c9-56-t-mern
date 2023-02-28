import React from "react"

import EditProfessionalData from "./EditProfessionalData"

export default {
  title: "RegisterProfessional/EditProfessionalData",
  component: EditProfessionalData,
  args: {},
}

const Template = (args) => <EditProfessionalData {...args} />

export const Default = Template.bind({})
Default.args = {}
