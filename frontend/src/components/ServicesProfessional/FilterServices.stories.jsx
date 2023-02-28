import React from "react"

import FilterServices from "./FilterServices"

export default {
  title: "ServicesProfessional/FilterServices",
  component: FilterServices,
  args: {},
}

const Template = (args) => <FilterServices {...args} />

export const Default = Template.bind({})
Default.args = {}
