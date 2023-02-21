import React from "react"

import HomePage from "."

export default {
  title: "Components/HomePage",
  component: HomePage,
  args: {},
}

const Template = (args) => <HomePage {...args} />

export const Default = Template.bind({})
Default.args = {}
