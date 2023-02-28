import React from "react"

import FormProfessionalInit from "./FormProfessionalInit"

export default {
  title: "RegisterProfessional/FormProfessionalInit",
  component: FormProfessionalInit,
  args: {},
}

const Template = (args) => <FormProfessionalInit {...args} />

export const Default = Template.bind({})
Default.args = {}
