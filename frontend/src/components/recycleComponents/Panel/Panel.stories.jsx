import React from "react"

import Panel from "./Panel"

export default {
  title: "Components/Panel",
  component: Panel,
  args: {},
}

const Template = (args) => <Panel {...args} />

export const Sample = Template.bind({})
Sample.args = {
  title: "Title",
  placeholder: "Placeholder",
}
