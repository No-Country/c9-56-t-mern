import React from "react"

import AddService from "./AddService"

export default {
  title: "ServicesProfessional/AddService",
  component: AddService,
  args: {},
}

const Template = (args) => <AddService {...args} />

export const Default = Template.bind({})
Default.args = {}
