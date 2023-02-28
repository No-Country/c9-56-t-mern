import React from "react"

import ListServices from "./ListServices"

export default {
  title: "ServicesProfessional/ListServices",
  component: ListServices,
  args: {},
}

const Template = (args) => <ListServices {...args} />

export const Default = Template.bind({})
Default.args = {}
